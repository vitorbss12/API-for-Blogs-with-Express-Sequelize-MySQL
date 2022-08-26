const express = require('express');

const routes = require('./routes');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();

app.use(express.json());
app.use(errorMiddleware);

app.use('/login', routes.loginRoute);

module.exports = app;
