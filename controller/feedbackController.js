const Feedback = require('../model/feedbackModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getFeedback = catchAsync(async (req,res,next) => {
    const doc = await Feedback.findById(req.params.id);

    if(!doc){
        return next(new AppError('No documents found',401));
    }

    res.status(200).json({
        status:'success',
        data:doc
    })
});

exports.getAllFeedback = catchAsync(async (req,res,next) => {
    const doc = await Feedback.find();

    if(!doc){
        return next(new AppError('No documents found',401));
    }

    res.status(200).json({
        status:'success', 
        data:doc
    })
});

exports.updateFeedback = catchAsync(async (req,res,next) => {
    const doc = await Feedback.findByIdAndUpdate(req.params.id, req.body);

    if(!doc){
        return next(new AppError('No documents found',401));
    }

    res.status(200).json({
        status:'success',
        data:doc
    })
});

exports.deleteFeedback = catchAsync(async (req,res,next) => {
    const doc = await Feedback.findByIdAndDelete(req.params.id);

    if(!doc){
        return next(new AppError('No documents found',401));
    }

    res.status(204).json({
        status:'success',
        data:'Deleted'
    })
});

exports.createfeedback = catchAsync(async (req,res,next) => {
    console.log(req.body);
    const doc = await Feedback.create(req.body);
    if(!doc){
        return next(new AppError('No created successfully',401));
    }
    res.status(201).json({
        status:'success',
        data:doc
    })
});
