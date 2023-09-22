const mongoose = require("mongoose")

async function main(){

    try
    {
        await mongoose.connect("mongodb+srv://admin:wuxWx4yu8NWnfP2y@cluster0.lqf8gwx.mongodb.net/?retryWrites=true&w=majority")
        
        console.log("[Project-Cost] - Database connection successfully.")
    } 
    catch(error)
    {
        console.log(`Error: ${error}`)
    }
}

module.exports = main