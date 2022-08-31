require('express-async-errors');
const express = require('express');

const routes = require('./routes');
const errorMiddleware = require('./middlewares/errorMiddleware');
const notFoundMiddleware = require('./middlewares/notFoundMiddleware');

const app = express();
app.disable('x-powered-by');

app.use(express.json());

app.use('/api/login', routes.loginRoute);
app.use('/api/users', routes.usersRoutes);
app.use('/api/categories', routes.categoriesRoute);
app.use('/api/posts', routes.postsRoute);

app.use('/*', notFoundMiddleware);

app.use(errorMiddleware);

module.exports = app;
