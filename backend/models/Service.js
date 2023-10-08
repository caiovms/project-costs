const mongoose = require("mongoose");

const { Schema } = mongoose;

const serviceSchema = new Schema({
    _id: { 
        type: mongoose.Schema.Types.ObjectId, 
        default: () => new mongoose.Types.ObjectId() 
    },
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
    }
}, {timestamps: true});

const Service = new mongoose.model("Service", serviceSchema);

module.exports = {
    Service, 
    serviceSchema
};