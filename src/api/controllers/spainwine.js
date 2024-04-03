const SpainWine = require('../models/SpainWine');

const getSpainWines = async (req, res, next) => {
  try {
    const allSpainWines = await SpainWine.find();
    return res.status(200).json(allSpainWines);
  } catch (error) {
    return next(error);
  }
};

const getSpainWinesById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const spainWine = await SpainWine.findById(id);
    if (spainWine) {
      return res.status(200).json(spainWine);
    } else {
      return res.status(404).json('No Wine found by this id!');
    }
  } catch (error) {
    return next(error);
  }
};

const getSpainWinesByName = async (req, res, next) => {
  try {
    const { name } = req.params;
    const spainWine = await SpainWine.find({ name: name });
    if (spainWine) {
      return res.status(200).json(spainWine);
    } else {
      return res.status(404).json('No Wine found by this name!');
    }
  } catch (error) {
    return next(error);
  }
};

const getSpainWinesByYear = async (req, res, next) => {
  try {
    const { year } = req.params;
    const spainWine = await SpainWine.find({ year: { $gte: year } });
    if (spainWine) {
      return res.status(200).json(spainWine);
    } else {
      return res.status(404).json('No Wine found by this year or later!');
    }
  } catch (error) {
    return next(error);
  }
};

const postSpainWine = async (req, res, next) => {
  try {
    const newSpainWine = new SpainWine({
      name: req.body.name,
      year: req.body.year,
      type: req.body.type,
      vineyard: req.body.vineyard,
      origin: req.body.origin
    });
    const createdSpainWine = await newSpainWine.save();
    return res.status(200).json(createdSpainWine);
  } catch (error) {
    return next(error);
  }
};

const putSpainWine = async (req, res, next) => {
  try {
    const { id } = req.params;
    const spainWineModify = new SpainWine(req.body);
    spainWineModify._id = id;
    const spainWineUpdate = await SpainWine.findByIdAndUpdate(
      id,
      spainWineModify
    );
    return res.status(200).json(spainWineUpdate);
  } catch (error) {
    return next(error);
  }
};

const deleteSpainWine = async (req, res, next) => {
  try {
    const { id } = req.params;
    await SpainWine.findByIdAndDelete(id);
    return res.status(200).json('Wine deleted!');
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getSpainWines,
  getSpainWinesById,
  getSpainWinesByName,
  getSpainWinesByYear,
  postSpainWine,
  putSpainWine,
  deleteSpainWine
};
