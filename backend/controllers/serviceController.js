const { Service: ServiceModel } = require("../models/Service");

const serviceController = {

    create: async(req, res) => {
        try {
            
            const service = {
                name: req.body.name,
                cost: req.body.cost,
                description: req.body.description
            };

            const response = await ServiceModel.create(service);

            res.status(201).json({response, msg:"Service added successfully."});

        } catch (error) {
            console.log(error)
        }
    },

    getAll: async(req, res) => {
        try {
            
            const services = await ServiceModel.find();

            res.json(services);
            
        } catch (error) {
            console.log(error)
        }
    },

    get: async(req, res) => {

        try {

            const id = req.params.id;
            const service = await ServiceModel.findById(id);

            if(!service){
                res.status(404).json({msg: "Service not found."});
                return;
            }

            res.json(service);

        } catch (error) {
            console.log(error)
        }
    },

    delete: async(req, res) => {

        try {

            const id = req.params.id;
            const service = await ServiceModel.findById(id);

            if(!service){
                res.status(404).json({msg: "Service not found."});
                return;
            }

            const deletedService = await ServiceModel.findByIdAndDelete(id);

            res.status(200)
               .json({deletedService, msg: "Service removed successfully."});

        } catch (error) {
            console.log(error)
        }
    },

    update: async(req, res) => {

        try {

            const id = req.params.id;

            const service = {
                name: req.body.name,
                cost: req.body.cost,
                description: req.body.description
            };

            const updatedService = await ServiceModel.findByIdAndUpdate(id, service);

            if(!updatedService){
                res.status(404).json({msg: "Service not found."});
                return;
            }

            res.status(200)
            .json({updatedService, msg: "Service updated successfully."});

        } catch (error) {
            console.log(error)
        }
    }

};

module.exports = serviceController;