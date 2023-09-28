const mongoose = require("mongoose");

const { Schema } = mongoose;

const categorySchema = new Schema({
    _id: { 
        type: mongoose.Schema.Types.ObjectId, 
        default: () => new mongoose.Types.ObjectId() 
    },
    name: {
        type: String, 
        require: true
    }
},{timestamps: true});

const Category = new mongoose.model("Category", categorySchema);

module.exports = {
    Category, 
    categorySchema
};