const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['./routes/router'];

const swaggerOptions = {
      info: {
        title: 'Project-Costs API',
        version: '1.0.0',
        description: 'Project Costs API Swagger documentation',
      },
      host: "localhost:8000",
      basePath: '/api/doc',
      schemes: ['http', 'https'],
      consumes: ['application/json'],
      produces: ['application/json'],
      tags: [
        {
            "name": "Category"
        },
        {
          "name": "Project"
        },
        {
          "name": "Service"
        }
    ],
  };

swaggerAutogen(outputFile, endpointsFiles, swaggerOptions).then(() => {
    require('./app.js')
    console.log("[Project-Costs] - Swagger JSON specification is ready.")
  });
