const { Router } = require("express");
const UsersController = require("../controllers/users.controller");
//const validateUser = require("../middleware/users.middleware");

const UsersRouter = Router();
const Users = new UsersController();

// GET ROUTES
UsersRouter.get("/", Users.getAll);
UsersRouter.get("/:user_id", Users.getById);


// POST ROUTES
UsersRouter.post("/register", Users.register);
UsersRouter.post("/login", Users.login);


// DELETE ROUTES
UsersRouter.delete("/delete/:user_id", Users.deleteById);


module.exports = UsersRouter;