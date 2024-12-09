const { Router } = require("express");
const OrderController = require("../controllers/order.controller");

const OrderRouter = Router();
const Order = new OrderController();

OrderRouter.post("/create", Order.create);
OrderRouter.get("/", Order.getAll);
OrderRouter.get("/:id", Order.getById);
OrderRouter.get("/user/:userid", Order.getByUserId);
OrderRouter.post("/edit/:id", Order.editStatusById);

module.exports = OrderRouter;