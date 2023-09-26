const mongoose = require("mongoose")

async function main(){

    try
    {
        await mongoose.connect("mongodb://admin:mXd2lPgdYhCtgxtR@localhost:27017");
        
        console.log("[Project-Costs] - Database connection successfully.")
    } 
    catch(error)
    {
        console.log(`Error: ${error}`)
    }
}

module.exports = main