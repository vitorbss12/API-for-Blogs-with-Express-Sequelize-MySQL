require('express-async-errors');
const express = require('express');

const routes = require('./routes');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();

app.use(express.json());

app.use('/login', routes.loginRoute);
app.use('/users', routes.usersRoutes);
app.use('/categories', routes.categoriesRoute);
app.use('/posts', routes.postsRoute);

app.use(errorMiddleware);

module.exports = app;
