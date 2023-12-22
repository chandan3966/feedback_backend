const express = require('express');
const feedbackController = require('../controller/feedbackController');


const feedbackRouter = express.Router();

feedbackRouter
  .route('/')
  .get(feedbackController.getAllFeedback)
  .post(feedbackController.createfeedback);

  feedbackRouter
  .route('/:id')
  .get(feedbackController.getFeedback)
  .patch(feedbackController.updateFeedback)
  .delete(feedbackController.deleteFeedback)


module.exports = feedbackRouter
;
