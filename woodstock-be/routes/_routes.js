const express = require("express");
const userRouter = require("./users.route.js");
const treeRouter = require('./tree.route.js');

const router = express.Router();

router.use("/user", userRouter);
router.use("/tree", treeRouter);

module.exports = router;
