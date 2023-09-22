const mongoose = require("mongoose");

const { Schema } = mongoose;

const { categorySchema } = require("./Category")
const { serviceSchema } = require("./Service")

const projectSchema = new Schema({
    name: {
        type: String, 
        require: true
    },
    cost: {
        type: Number, 
        require: true
    },
    description: {
        type: String, 
        require: true
    },
    category:{
        type: categorySchema
    },
    services: {
        type: [serviceSchema]
    }
}, {timestamps: true});

const Project = new mongoose.model("Project", projectSchema);

module.exports = {
    Project, 
    projectSchema
};