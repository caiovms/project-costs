const router = require("express").Router();

const projectsRouter = require("./projects");
router.use("/", projectsRouter);

const categoriesRouter = require("./categories");
router.use("/", categoriesRouter);

const servicsRouter = require("./services");
router.use("/", servicsRouter);

module.exports = router;