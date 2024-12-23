const db = require('../connector');
const bcrypt = require("bcrypt");
const { buildResp, cleanStr } = require("../utils/utils");

class UsersController {
  async getAll(req, res) {
    try {
      const users = await db.pool.query("SELECT * FROM Account;");
      res
        .status(200)
        .send(buildResp("Users retrieved successfully", users.rows));
    } catch (err) {
      console.error(err.message);
      return;
    }
  }

  async getById(req, res) {
    const { user_id } = req.params;
    try {
      const user = await db.pool(
        `SELECT * FROM users WHERE user_id = ${user_id};`
      );
      const msg =
        user.rows.length === 0
          ? "User not found"
          : "User retrieved successfully";

      if (user.rows.length === 0) {
        res.status(400).send(buildResp(msg, user.rows[0]));
      } else {
        res.status(200).send(buildResp(msg, user.rows[0]));
      }

    } catch (err) {
      console.error(err.message);
      return;
    }
  }

  async register(req, res) {
    const { name, email, username, password, phone, photo, country} = req.body;
    const isAdmin = false;
    if (!name || !email || !username || !password || !phone || !photo || !country) {
      return res.status(400).send(buildResp("Missing required fields"));
    }
  
    try {
      // Hash password
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      const checkUser = await db.pool.query(
        `SELECT * FROM account WHERE username = $1;`,
        [username]
      );
      if (checkUser.rowCount > 0) {
        return res.status(409).send(buildResp("Username already exists"));
      }
      const checkEmail = await db.pool.query(
        `SELECT * FROM account WHERE email = $1;`,
        [email]
      );
      if (checkEmail.rowCount > 0) {
        return res.status(409).send(buildResp("! Email already exists"));
      }
  
      // Insert user into the database
      const result = await db.pool.query(
        `INSERT INTO account (name, email, username, phone, password, photo, country, isAdmin) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8) 
        RETURNING *;`,
        [name, email, username, phone, hashedPassword, photo, country, isAdmin]
      );
  
      // Send success response with the created user
      res.status(200).send(buildResp("User created successfully", result.rows[0]));
    } catch (err) {
      console.error(err.message);
      res.status(500).send(buildResp("Error creating user", err.message));
    }
  }
  

  async login(req, res) {
    const { username, password } = req.body;
    
    if (!username || !password) {
      return res.status(400).send(buildResp("Missing required fields", { login: false }, false));
    }

    try {
      const { rows } = await db.pool.query(
        `SELECT * FROM account WHERE username = $1;`,
        [username]
      );

      if (rows.length === 0) {
        return res.status(400).send(buildResp("User not found", { login: false }, false));
      }

      const match = await bcrypt.compare(password, rows[0].password);
      if (!match) {
        return res.status(400).send(buildResp("Incorrect password", { login: false }, false));
      }

      // Exclude password from the response
      const { password: _, ...userWithoutPassword } = rows[0];

      res.status(200).send(buildResp("Login successful", userWithoutPassword));
    } catch (err) {
      console.error(err.message);
      res.status(500).send(buildResp("Error logging in", { login: false }, false));
    }
}

  

  async deleteById(req, res) {
    const { user_id } = req.params;
    try {
      const user = await db.pool(
        `DELETE FROM users WHERE user_id = ${user_id} RETURNING *;`
      );
      const msg =
        user.rows.length === 0 ? "User not found" : "User deleted successfully";

      if (user.rows.length === 0) {
        res.status(400).send(buildResp(msg, user.rows[0]));
      } else {
        res.status(200).send(buildResp(msg, user.rows[0]));
      }

    } catch (err) {
      console.error(err.message);
      return;
    }
  }



}

module.exports = UsersController;