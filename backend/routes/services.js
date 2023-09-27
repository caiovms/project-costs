const router = require("express").Router();

const serviceController = require("../controllers/serviceController");

router.route("/services")
      .post((req, res) => {
      /*#swagger.tags = ['Service']*/
      serviceController.create(req, res)
      });

router.route("/services")
      .get((req, res) => {
      /*#swagger.tags = ['Service']*/
      serviceController.getAll(req, res)
      });

router.route("/services/:id")
      .get((req, res) => {
      /*#swagger.tags = ['Service']*/
      serviceController.get(req, res)
      });

router.route("/services/:id")
      .delete((req, res) => {
      /*#swagger.tags = ['Service']*/
      serviceController.delete(req, res)
      });

router.route("/services/:id")
      .patch((req, res) => {
      /*#swagger.tags = ['Service']*/
      serviceController.update(req, res)
      });

module.exports = router;