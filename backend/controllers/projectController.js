const { Project: ProjectModel } = require("../models/Project");

const checkProjectBudget = (projectBudget, services) => {

    const totalServicesCost = services.reduce((cost, service) => cost + service.cost, 0);

    if(totalServicesCost > projectBudget){
        return false;
    }

    return true;
}

const projectController = {

    create: async(req, res) => {
        try {
            
            const project = {
                name: req.body.name,
                budget: req.body.budget,
                usedBudget: req.body.usedBudget,
                category: req.body.category,
                services: req.body.services
            };

            if(project.services && !checkProjectBudget(project.budget, project.services)){
                res.status(406).json({msg: "Insuficient budget."})
                return
            }

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
                budget: req.body.budget,
                usedBudget: req.body.usedBudget,
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