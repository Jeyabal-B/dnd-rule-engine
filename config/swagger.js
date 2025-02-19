const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.1.0',
        info: {
            title: 'Rule Engine',
            version: '1.0.0',
            description: 'Rule Engine documentation'
        },
        servers: [
            {
                url: 'http://localhost:8082' // The app server URL
            }
        ],
        components: {
            schemas: {

            }
        }
    },
    apis: [] // Path to the API Routing config files
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = {swaggerUi, swaggerDocs};