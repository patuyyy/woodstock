const { Router } = require("express");
const TreeController = require("../controllers/tree.controller");

const TreeRouter = Router();
const Tree = new TreeController();

// GET ROUTES
TreeRouter.get("/", Tree.getAll);
TreeRouter.get("/:tree_id", Tree.getById);


// POST ROUTES


// DELETE ROUTES
TreeRouter.delete("/delete/:tree_id", Tree.deleteById);


module.exports = TreeRouter;