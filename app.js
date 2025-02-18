const express = require('express');
const app = express();
const PORT = 8082;

app.listen(PORT, () => {
    console.log('Listening on port: '+PORT);
})