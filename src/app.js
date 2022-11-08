const express = require('express');
const app = express();
const morgan = require('morgan');

// const logging = (req, res, next) => {
//   console.log('A request is being made!');
//   next();
// };

// app.use(logging);
app.use(morgan('dev'));

module.exports = app;
