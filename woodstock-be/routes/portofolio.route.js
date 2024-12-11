const { Router } = require("express");
const PortofolioController = require("../controllers/portofolio.controller");

const PortofolioRouter = Router();
const Portofolio = new PortofolioController();

PortofolioRouter.post("/create",Portofolio.create);
PortofolioRouter.get("/", Portofolio.getAll);
PortofolioRouter.get("/order/:orderId", Portofolio.getByOrderId);

module.exports = PortofolioRouter;