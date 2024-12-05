const db = require("../connector");
const bcrypt = require("bcrypt");
const { buildResp, cleanStr } = require("../utils/utils");

class MarketController {
  async create(req, res) {
    const { name, price, description, categories, photo, availability} = req.body;
    
    if (!name || !price || !description || !categories || !photo || !availability) {
      console.log(req.body);
      return res.status(400).send(buildResp("Missing required fields"));
    }
    
    try {
      // Insert user into the database
      const result = await db.pool.query(
        `INSERT INTO trees (name, price, description, categories, photo, availability) 
        VALUES ($1, $2, $3, $4, $5, $6) 
        RETURNING *;`,
        [name, price, description, categories, photo, availability]
      );
  
      // Send success response with the created user
      res.status(200).send(buildResp("Tree created successfully", result.rows[0]));
    } catch (err) {
      console.error(err.message);
      res.status(500).send(buildResp("Error creating tree", err.message));
    }
  }

  async getAll(req, res) {
    try {
      const users = await db.pool.query("SELECT * FROM Trees;");
      res
        .status(200)
        .send(buildResp("Trees retrieved successfully", users.rows));
    } catch (err) {
      console.error(err.message);
      return;
    }
  }

  async getById(req, res) {
    const { id } = req.params;
    try {
      const user = await db.pool.query(
        `SELECT * FROM trees WHERE id = ${id};`
      );
      const msg =
        user.rows.length === 0
          ? "tree not found"
          : "tree retrieved successfully";

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

module.exports = MarketController;