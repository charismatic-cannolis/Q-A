const express = require('express');
const path = require('path');
const db = require('../database/index.js');
const port = 1010;

const router = require('./routers/routes.js');

const app = express();
app.use('/questions', router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})