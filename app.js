const express = require('express');
const globalErrorController = require('./controller/errorController');
const feedbackRouter = require('./routes/feedbackRoute');
const rateLimit = require('express-rate-limit');


const app = express();

app.use(express.json());

const loggerMiddleware = (req, res, next) => {
    console.log(`Request URL: ${req.originalUrl}`);
    next();
  };
  
app.use(loggerMiddleware);


app.use('/api/v1/feedback',feedbackRouter);

//route to handle all unidentified routes
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on the webapp.`, 404));
});

app.use(globalErrorController);

  // Define a rate limiter
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again in an 15 min',
  });
app.use('/api', limiter);
  
  module.exports = app;
  