const express = require('express');
const fs = require('fs');
const morgan = require('morgan');

const app = express();

// USE morgan
// console.log(process.env.NODE_ENV);
// if (process.env.NODE_ENV === 'dev') {
app.use(morgan('short'));
// }

app.use(express.json());
// USE middleware to serve static files
app.use(express.static(`${__dirname}/public`));

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

// Middleware Stack
// Custom Middleware function
app.use((req, res, next) => {
  //console.log('Hello from the middleware');
  next();
});

// Custom Middleware function
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// User Route
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
