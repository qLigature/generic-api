const Something = require('../models/something');

// Get all something
exports.getAllSomething = async (req, res, next) => {
  try {

    const somethingList = await Something.find();

    res.status(200).send(somethingList);

  } catch (error) {
    return next(error);
  }
};

// Get something using ID stored in URL parameters
exports.getSomething = async (req, res, next) => {
  try {

    const something = await Something.findById(req.params.id);
    if (!something) return res.status(404).send();

    res.status(200).send(something);

  } catch (error) {
    return next(error);
  }
};

// Create something
exports.createSomething = async (req, res, next) => {
  try {

    const something = await Something.create(req.body);

    res.status(201).send(something);

  } catch (error) {
    return next(error);
  }
};

// Update something
exports.updateSomething = async (req, res, next) => {
  try {

    const something = await Something.findById(req.params.id);
    if (!something) return res.status(404).send();

    something.data = req.body.data;
    await something.save();
    res.status(200).send(something);

  } catch (error) {
    return next(error);
  }
};

// Delete something
exports.deleteSomething = async (req, res, next) => {
  try {

    const something = await Something.findById(req.params.id);
    if (!something) return res.status(404).send();

    something.delete();
    res.status(200).send();

  } catch (error) {
    return next(error);
  }
};
