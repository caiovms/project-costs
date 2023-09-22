const mongoose = require("mongoose")

async function main(){

    try
    {
        await mongoose.connect("mongodb+srv://admin:mXd2lPgdYhCtgxtR@cluster0.eqvsbch.mongodb.net/?retryWrites=true&w=majority")
        
        console.log("[Project-Cost] - Database connection successfully.")
    } 
    catch(error)
    {
        console.log(`Error: ${error}`)
    }
}

module.exports = main