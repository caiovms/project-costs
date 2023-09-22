const mongoose = require("mongoose")

async function main(){

    try
    {
        // await mongoose.connect("mongodb+srv://admin:mXd2lPgdYhCtgxtR@cluster0.eqvsbch.mongodb.net/?retryWrites=true&w=majority");
        await mongoose.connect("mongodb://admin:mXd2lPgdYhCtgxtR@localhost:27017");
        
        console.log("[Project-Cost] - Database connection successfully.")
    } 
    catch(error)
    {
        console.log(`Error: ${error}`)
    }
}

module.exports = main