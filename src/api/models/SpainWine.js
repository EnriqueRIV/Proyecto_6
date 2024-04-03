const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const wineSchema = new Schema(
  {
    name: { type: String, required: true },
    year: { type: Number, required: true },
    type: { type: String, required: true },
    vineyard: { type: String, required: true },
    origin: { type: String }
  },
  {
    timestamps: true,
    collection: 'spainwines'
  }
);

const SpainWine = mongoose.model('spainWines', wineSchema, 'spainwines');
module.exports = SpainWine;
