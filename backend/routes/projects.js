const router = require("express").Router();

const projectController = require("../controllers/projectController");

router.route("/projects")
      .post((req, res) => { 
      /*#swagger.tags = ['Project']*/
      projectController.create(req, res)
      });

router.route("/projects")
      .get((req, res) => { 
      /*#swagger.tags = ['Project']*/
      projectController.getAll(req, res)
      });

router.route("/projects/:id")
      .get((req, res) => { 
      /*#swagger.tags = ['Project']*/
      projectController.get(req, res)
      });

router.route("/projects/:id")
      .delete((req, res) => { 
      /*#swagger.tags = ['Project']*/
      projectController.delete(req, res)
      });

router.route("/projects/:id")
      .patch((req, res) => { 
      /*#swagger.tags = ['Project']*/
      projectController.update(req, res)
      });

module.exports = router;