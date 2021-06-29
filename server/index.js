const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js');
const port = 1010;

const router = require('./routers/routes.js');

const app = express();
app.use(bodyParser.json());
app.use('/qa/', router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})