const { Router } = require("express");
const MarketController = require("../controllers/market.controller");

const MarketRouter = Router();
const Market = new MarketController();

MarketRouter.post("/create", Market.create);
MarketRouter.get("/", Market.getAll);
MarketRouter.get("/:id", Market.getById);

module.exports = MarketRouter;