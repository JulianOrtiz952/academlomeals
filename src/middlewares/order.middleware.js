const catchAsync = require('../utils/catchAsync');
const Meal = require('../models/meals.model');
const AppError = require('../utils/appError');

exports.validOrder = catchAsync(async (req, res, next) => {

  const { id } = req.params;

  const order = await Meal.findOne({
    where: { 
      id
    },
  });

  if(!order) 
  return next(new AppError('Meal not found', 404));

  req.order = order;
  next();
});