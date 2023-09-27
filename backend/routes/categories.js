const router = require("express").Router();

const categoryController = require("../controllers/categoryController");

router.route("/categories")
      .post((req, res) => {
        /*#swagger.tags = ['Category']*/
        categoryController.create(req, res)
      });

router.route("/categories")
      .get((req, res) => {
        /*#swagger.tags = ['Category']*/
        categoryController.getAll(req, res)
      });

router.route("/categories/:id")
      .get((req, res) => {
        /*#swagger.tags = ['Category']*/
        categoryController.get(req, res)
      });

router.route("/categories/:id")
      .delete((req, res) => {
        /*#swagger.tags = ['Category']*/
        categoryController.delete(req, res)
      });

router.route("/categories/:id")
      .put((req, res) => {
        /*#swagger.tags = ['Category']*/
        categoryController.update(req, res)
      });

module.exports = router;