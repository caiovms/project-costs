const express = require("express");
const cors = require("cors");
const app = express();

//Configure services
app.use(cors());
app.use(express.json());

//Db Connection
const conn = require("./db/conn");
conn();

//Routes
const routes = require("./routes/router");
app.use('/api', routes);

app.listen(8000, function(){
    console.log("[Project-Cost] - Server online.")
});