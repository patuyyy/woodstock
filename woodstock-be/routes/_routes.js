const express = require("express");
const userRouter = require("./users.route.js");
const treeRouter = require('./tree.route.js');
const uploadRouter = require('../cloudinary/routeUpload.js');

const router = express.Router();

router.use("/user", userRouter);
router.use("/tree", treeRouter);
router.use("/upload", uploadRouter);

module.exports = router;
