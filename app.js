const express = require('express');
const app = express();
const PORT = 8082;
const {swaggerUi, sawggerDocs, swaggerDocs} = require('./config/swagger.js');

//Config Swagger
app.use('/swagger-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(PORT, () => {
    console.log('Listening on port: '+PORT);
})