const { db } = require("../config/db.config");
const bcrypt = require("bcrypt");
const { buildResp, cleanStr } = require("../utils/utils");

class UsersController {
  async getAll(req, res) {
    try {
      const users = await db.query("SELECT * FROM users;");
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
      const user = await db.query(
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
    const { name, username, password } = req.body;
    if (!name || !username || !password) {
      res.status(400).send(buildResp("Missing required fields"));
      return;
    }

    try {
      // Hash password
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const user = await db.query(
        `INSERT INTO users (name, username, password) 
            VALUES ('${name}', '${username}', '${hashedPassword}') 
            RETURNING *;`
      );
      res
        .status(200)
        .send(buildResp("User created successfully", user.rows[0]));
    } catch (err) {
      console.error(err.message);
      return;
    }
  }

  async login(req, res) {
    const { username, password } = req.body;
    if (!username || !password) {
      res
        .status(400)
        .send(buildResp("Missing required fields", { login: false }, false));
      return;
    }

    try {
      const user = await db.query(
        `SELECT * FROM users WHERE username = '${username}';`
      );
      if (user.rows.length === 0) {
        res
          .status(400)
          .send(buildResp("User not found", { login: false }, false));
        return;
      }

      const match = await bcrypt.compare(password, user.rows[0].password);
      if (!match) {
        res
          .status(400)
          .send(buildResp("Incorrect password", { login: false }, false));
        return;
      }

      res.status(200).send(buildResp("Login successful", user.rows[0]));
    } catch (err) {
      console.error(err.message);
      return;
    }
  }

  async deleteById(req, res) {
    const { user_id } = req.params;
    try {
      const user = await db.query(
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