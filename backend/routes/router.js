const router = require("express").Router();

const categoryRouter = require("./category");

router.use("/", categoryRouter);

module.exports = router;