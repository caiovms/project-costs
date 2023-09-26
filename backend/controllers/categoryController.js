const { Category: CategoryModel } = require("../models/Category");

const categoryController = {

    create: async(req, res) => {
        try {
            
            const category = {
                name: req.body.name
            };

            const response = await CategoryModel.create(category);

            res.status(201).json({response, msg:"Category added successfully."});

        } catch (error) {
            console.log(error)
        }
    },

    getAll: async(req, res) => {
        try {
            
            const categories = await CategoryModel.find();

            res.json(categories);
            
        } catch (error) {
            console.log(error)
        }
    },

    get: async(req, res) => {

        try {

            const id = req.params.id;
            const category = await CategoryModel.findById(id);

            if(!category){
                res.status(404).json({msg: "Category not found."});
                return;
            }

            res.json(category);

        } catch (error) {
            console.log(error)
        }
    },

    delete: async(req, res) => {

        try {

            const id = req.params.id;
            const category = await CategoryModel.findById(id);

            if(!category){
                res.status(404).json({msg: "Category not found."});
                return;
            }

            const deletedCategory = await CategoryModel.findByIdAndDelete(id);

            res.status(200)
               .json({deletedCategory, msg: "Category removed successfully."});

        } catch (error) {
            console.log(error)
        }
    },

    update: async(req, res) => {

        try {

            const id = req.params.id;

            const project = {
                description: req.body.description
            };

            const updatedCategory = await CategoryModel.findByIdAndUpdate(id, project);

            if(!updatedCategory){
                res.status(404).json({msg: "Category not found."});
                return;
            }

            res.status(200)
            .json({updatedCategory: updatedCategory, msg: "Category updated successfully."});

        } catch (error) {
            console.log(error)
        }
    }
};

module.exports = categoryController;