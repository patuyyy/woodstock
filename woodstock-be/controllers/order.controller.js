const db = require("../connector");
const { buildResp, cleanStr } = require("../utils/utils");

class OrderController {
  async create(req, res) {
    const { accountId, treeId, proof } = req.body;
    const status = "PENDING";
    const dateCreated = new Date().toISOString();

    if (!accountId || !treeId) {
      console.log(req.body);
      return res.status(400).send(buildResp("Missing required fields"));
    }

    try {
      const result = await db.pool.query(
        `INSERT INTO Orders (accountId, treeId, paymentStatus, datePurchased, proof) 
            VALUES ($1, $2, $3, $4, $5) 
            RETURNING *;`,
        [accountId, treeId, status, dateCreated, proof]
      );

      // Send success response with the created user
      res.status(200).send(buildResp("Order created successfully", result.rows[0]));
    } catch (err) {
      console.error(err.message);
      res.status(500).send(buildResp("Error creating order", err.message));
    }
  }


  async getAll(req, res) {
    try {
      const orders = await db.pool.query(
        `SELECT o.id, o.accountid, a.username AS accountname, o.treeid, t.name AS treename, o.paymentstatus, o.datepurchased
                FROM Orders o
                JOIN account a ON o.accountid = a.id
                JOIN trees t ON o.treeid = t.id;`
      );

      res.status(200).send(buildResp("Orders retrieved successfully", orders.rows));
    } catch (err) {
      console.error(err.message);
      res.status(500).send(buildResp("An error occurred", [])); // Send empty array if error occurs
    }
  }


  async getById(req, res) {
    const { id } = req.params;
    try {
      const query = `
            SELECT 
                orders.*,
                account.name AS accountname, 
                trees.name AS treename
            FROM 
                orders
            JOIN 
                account ON orders.accountid = account.id
            JOIN 
                trees ON orders.treeid = trees.id
            WHERE 
                orders.id = $1;
        `;
      const user = await db.pool.query(query, [id]); // Use parameterized query to avoid SQL injection

      const msg = user.rows.length === 0
        ? "Order not found"
        : "Order retrieved successfully";

      if (user.rows.length === 0) {
        res.status(400).send(buildResp(msg, null));
      } else {
        res.status(200).send(buildResp(msg, user.rows[0]));
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).send(buildResp("Server error", null));
    }
  }

  async getByUserId(req, res) {
    const { userid } = req.params;
    try {
      const user = await db.pool.query(
        `SELECT o.id, o.accountid, o.treeid, o.paymentstatus, o.datepurchased, t.name AS treename
                FROM orders o
                JOIN trees t ON o.treeid = t.id
                WHERE o.accountid = $1;`, [userid]
      );

      const msg = user.rows.length === 0
        ? "Order not found"
        : "Orders retrieved successfully";

      res.status(user.rows.length === 0 ? 400 : 200).send(buildResp(msg, user.rows));

    } catch (err) {
      console.error(err.message);
      res.status(500).send(buildResp("An error occurred", [])); // Send empty array if error occurs
    }
  }

  async editStatusById(req, res) {
    const { id } = req.params;
    const { status } = req.body;
    try {
      const query = `UPDATE orders SET paymentstatus = $1 WHERE id = $2 RETURNING *;`;
      const values = [status, id];

      const result = await db.pool.query(query, values);

      if (result.rowCount === 0) {
        // No rows were updated, meaning the order was not found.
        res.status(404).send(buildResp("Order not found", null));
      } else {
        // Successfully updated the order.
        res.status(200).send(buildResp("Order edited successfully", result.rows[0]));
      }
    } catch (err) {
      // Handle database errors gracefully.
      console.error(err.message);
      res.status(500).send(buildResp("An error occurred while updating the order", null));
    }
  }

  async getAcceptedOrder(req, res) {
    const { userid } = req.params;
    try {
      const user = await db.pool.query(
        `SELECT o.id, o.accountid, o.treeid, o.paymentstatus, o.datepurchased, t.name AS treename, t.photo AS treephoto
                FROM orders o
                JOIN trees t ON o.treeid = t.id
                WHERE o.accountid = $1 AND o.paymentstatus = 'ACCEPTED';`, [userid]
      );

      const msg = user.rows.length === 0
        ? "Order not found"
        : "Orders retrieved successfully";

      res.status(user.rows.length === 0 ? 400 : 200).send(buildResp(msg, user.rows));

    } catch (err) {
      console.error(err.message);
      res.status(500).send(buildResp("An error occurred", [])); // Send empty array if error occurs
    }
  }

  async getAllAcceptedOrder(req, res) {
    try {
      const user = await db.pool.query(
        `SELECT 
          o.id, 
          o.accountid, 
          o.treeid, 
          o.paymentstatus, 
          o.datepurchased, 
          t.name AS treename, 
          t.photo AS treephoto, 
          a.name AS accountname
        FROM 
          orders o
        JOIN 
          trees t ON o.treeid = t.id
        JOIN 
          account a ON o.accountid = a.id  -- Ensure the correct relationship
        WHERE 
          o.paymentstatus = 'ACCEPTED';
        `
      );

      const msg = user.rows.length === 0
        ? "Order not found"
        : "Orders retrieved successfully";

      res.status(user.rows.length === 0 ? 400 : 200).send(buildResp(msg, user.rows));

    } catch (err) {
      console.error(err.message);
      res.status(500).send(buildResp("An error occurred", [])); // Send empty array if error occurs
    }
  }



}

module.exports = OrderController