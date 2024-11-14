const db = require("../connector");
const bcrypt = require("bcrypt");
const { buildResp, cleanStr } = require("../utils/utils");

class TreeController {
  async getAll(req, res) {
    try {
      const tree = await db.pool("SELECT * FROM tree;");
      res
        .status(200)
        .send(buildResp("Tree retrieved successfully", tree.rows));
    } catch (err) {
      console.error(err.message);
      return;
    }
  }

  async getById(req, res) {
    const { tree_id } = req.params;
    try {
      const tree = await db.pool(
        `SELECT * FROM tree WHERE tree_id = ${tree_id};`
      );
      const msg =
      tree.rows.length === 0
          ? "Tree not found"
          : "Tree retrieved successfully";

      if (tree.rows.length === 0) {
        res.status(400).send(buildResp(msg, tree.rows[0]));
      } else {
        res.status(200).send(buildResp(msg, tree.rows[0]));
      }

    } catch (err) {
      console.error(err.message);
      return;
    }
  }

  async deleteById(req, res) {
    const { tree_id } = req.params;
    try {
      const tree = await db.pool(
        `DELETE FROM tree WHERE tree_id = ${tree_id} RETURNING *;`
      );
      const msg =
      tree.rows.length === 0 ? "tree not found" : "tree deleted successfully";

      if (tree.rows.length === 0) {
        res.status(400).send(buildResp(msg, tree.rows[0]));
      } else {
        res.status(200).send(buildResp(msg, tree.rows[0]));
      }

    } catch (err) {
      console.error(err.message);
      return;
    }
  }



}

module.exports = TreeController;