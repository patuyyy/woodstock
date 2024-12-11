const express = require("express");
const userRouter = require("./users.route.js");
const marketRouter = require('./market.route.js');
const orderRouter = require('./order.route.js');
const uploadRouter = require('../cloudinary/routeUpload.js');
const portoRouter = require('./portofolio.route.js');

const router = express.Router();

router.use("/user", userRouter);
router.use("/market", marketRouter);
router.use("/upload", uploadRouter);
router.use("/order", orderRouter)
router.use("/porto",portoRouter);

module.exports = router;
