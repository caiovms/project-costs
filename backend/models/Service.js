const mongoose = require("mongoose");

const { Schema } = mongoose;

const serviceSchema = new Schema({
    name: {
        type: String, 
        require: true
    },
    budget: {
        type: Number, 
        require: true
    }
}, {timestamps: true});

const Service = new mongoose.model("Service", serviceSchema);

module.exports = {
    Service, 
    serviceSchema
};