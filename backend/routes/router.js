const router = require("express").Router();

const projectsRouter = require("./projects");
router.use("/", projectsRouter);


module.exports = router;