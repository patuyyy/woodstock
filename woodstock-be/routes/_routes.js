const express = require("express");
const userRouter = require("./users.route.js");
const marketRouter = require('./market.route.js');
const uploadRouter = require('../cloudinary/routeUpload.js');

const router = express.Router();

router.use("/user", userRouter);
router.use("/market", marketRouter);
router.use("/upload", uploadRouter);

module.exports = router;
