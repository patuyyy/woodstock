const db = require("../connector");
const { buildResp, cleanStr } = require("../utils/utils");

class PortofolioController {
    async create(req, res) {
        const {orderId, progressPhoto, statusDescription } = req.body;
        const dateUpdated = new Date().toISOString();
    
        // Validate input
        if (!orderId || !progressPhoto || !statusDescription) {
            return res.status(400).send(buildResp("Missing required fields"));
        }
    
        try {
            // Database query with joins
            const result = await db.pool.query(
                `INSERT INTO Portofolio (accountId, treeid, orderid, progressphoto, dateupdated, statusdescription) 
                 SELECT a.id, t.id, o.id, $2, $3, $4
                 FROM Orders o
                 JOIN Trees t ON o.treeid = t.id
                 JOIN Account a ON o.accountid = a.id
                 WHERE o.id = $1
                 RETURNING *;`,
                [orderId, progressPhoto, dateUpdated, statusDescription]
            );
    
            // Send success response
            res.status(200).send(buildResp("Order created successfully", result.rows[0]));
        } catch (err) {
            console.error(err.message);
            res.status(500).send(buildResp("Error creating order", err.message));
        }
    }
    


  async getAll(req, res) {
    try {
      const orders = await db.pool.query(
        `SELECT p.id, p.accountid, a.username AS accountname, p.treeid, p.orderid, p.progressphoto, p.dateupdated, p.statusdescription, t.name AS treename 
                FROM Portofolio p
                JOIN account a ON p.accountid = a.id
                JOIN trees t ON p.treeid = t.id;`
      );

      res.status(200).send(buildResp("Orders retrieved successfully", orders.rows));
    } catch (err) {
      console.error(err.message);
      res.status(500).send(buildResp("An error occurred", [])); // Send empty array if error occurs
    }
  }


  async getByOrderId(req, res) {
    const { orderId } = req.params;
    try {
      const user = await db.pool.query(
        `SELECT p.id, p.accountid, a.username AS accountname, p.treeid, p.orderid, p.progressphoto, p.dateupdated, p.statusdescription, t.name AS treename 
                FROM Portofolio p
                JOIN account a ON p.accountid = a.id
                JOIN trees t ON p.treeid = t.id 
                WHERE p.orderid = $1;`, [orderId]
      );
      const msg = user.rows.length === 0
        ? "No Portofolio"
        : "Orders retrieved successfully";

      res.status(200).send(buildResp(msg, user.rows));

    } catch (err) {
      console.error(err.message);
      res.status(500).send(buildResp("An error occurred", [])); // Send empty array if error occurs
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

}

module.exports = PortofolioController