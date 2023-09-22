const { Project: ProjectModel } = require("../models/Project");

const projectController = {

    create: async(req, res) => {
        try {
            
            const project = {
                name: req.body.name,
                cost: req.body.cost,
                description: req.body.description,
                category: req.body.category,
                services: req.body.services
            };

            const response = await ProjectModel.create(project);

            res.status(201).json({response, msg:"Project added successfully."});

        } catch (error) {
            console.log(error)
        }
    },

    getAll: async(req, res) => {
        try {
            
            const projects = await ProjectModel.find();

            res.json(projects);
            
        } catch (error) {
            console.log(error)
        }
    },

    get: async(req, res) => {

        try {

            const id = req.params.id;
            const project = await ProjectModel.findById(id);

            if(!project){
                res.status(404).json({msg: "Project not found."});
                return;
            }

            res.json(project);

        } catch (error) {
            console.log(error)
        }
    },

    delete: async(req, res) => {

        try {

            const id = req.params.id;
            const project = await ProjectModel.findById(id);

            if(!project){
                res.status(404).json({msg: "Project not found."});
                return;
            }

            const deletedProject = await ProjectModel.findByIdAndDelete(id);

            res.status(200)
               .json({deletedProject, msg: "Project removed successfully."});

        } catch (error) {
            console.log(error)
        }
    },

    update: async(req, res) => {

        try {

            const id = req.params.id;

            const project = {
                name: req.body.name,
                cost: req.body.cost,
                description: req.body.description,
                category: req.body.category,
                services: req.body.services
            };

            const updatedProject = await ProjectModel.findByIdAndUpdate(id, project);

            if(!updatedProject){
                res.status(404).json({msg: "Project not found."});
                return;
            }

            res.status(200)
            .json({updatedProject, msg: "Project updated successfully."});

        } catch (error) {
            console.log(error)
        }
    }
};

module.exports = projectController;