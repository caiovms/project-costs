const mongoose = require("mongoose");

const { Schema } = mongoose;

const categorySchema = new Schema({
    description: {
        type: String, 
        require: true
    }
},{timestamps: true});

const Category = new mongoose.model("Category", categorySchema);

module.exports = {
    Category, 
    categorySchema
};