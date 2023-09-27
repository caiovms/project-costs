const express = require("express");
const cors = require("cors");
const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');

//Configure services
app.use(cors());
app.use(express.json());

//Db Connection
const conn = require("./db/conn");
conn();

//Routes
const routes = require("./routes/router");
app.use('/api', routes);

//Swagger
app.use('/api/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(8000, function(){
    console.log("[Project-Costs] - Server online.")
});
