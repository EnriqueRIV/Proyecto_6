require('dotenv').config();
const mongoose = require('mongoose');
const SpainWine = require('../models/SpainWine');
const { connectDB } = require('../../config/db');
const { error } = require('console');

const spainWines = [
  {
    name: 'Borsao Joven',
    year: 2021,
    type: 'Vino Tinto',
    vineyard: 'Bodegas Borsao',
    origin: 'Campo de Borja'
  },
  {
    name: 'Marqués de Càceres',
    year: 2022,
    type: 'Vino Blanco',
    vineyard: 'Marqués de Cáceres',
    origin: 'Rueda'
  },
  {
    name: 'Honora Vera Garnacha',
    year: 2021,
    type: 'Vino Tinto',
    vineyard: 'Ateca',
    origin: 'Calatayud'
  },
  {
    name: 'Viña Zorzal Garnacha',
    year: 2022,
    type: 'Vino Rosado',
    vineyard: 'Viña Zorzal Wines',
    origin: 'Navarra'
  },
  {
    name: 'Pando Williams & Humbert',
    year: 2021,
    type: 'Vino Tinto',
    vineyard: 'Williams & Humbert',
    origin: 'Jerez'
  },
  {
    name: 'Manzanilla La Gitana',
    year: 2021,
    type: 'Vino Tinto',
    vineyard: 'Bodegas Hidalgo La Gitana',
    origin: 'Manzanilla Sanlucar de Barrameda'
  },
  {
    name: 'Juan Gil Etiqueta Amarilla',
    year: 2021,
    type: 'Vino Tinto',
    vineyard: 'Juan Gil',
    origin: 'Jumilla'
  },
  {
    name: 'Només Garnatxa Blanca',
    year: 2022,
    type: 'Vino Blanco',
    vineyard: 'Castillo de Perelada',
    origin: 'Emporda'
  },
  {
    name: 'Viña Pomal Centenario',
    year: 2019,
    type: 'Vino Tinto',
    vineyard: 'Bodegas Bilbaínas',
    origin: 'Ca. Rioja'
  },
  {
    name: 'Versos de Valtuille',
    year: 2021,
    type: 'Vino Tinto',
    vineyard: 'Bodegas Estévez',
    origin: 'Mencía'
  },
  {
    name: 'Los Conejos Malditos',
    year: 2021,
    type: 'Vino Blanco',
    vineyard: 'Más Que Vinos',
    origin: 'Ocaña'
  },
  {
    name: 'Montecastrillo',
    year: 2021,
    type: 'Vino Tinto',
    vineyard: 'Finca Torremilanos',
    origin: 'Ribera del Duero'
  },
  {
    name: 'Cucú',
    year: 2022,
    type: 'Vino Blanco',
    vineyard: 'Barco del Corneta',
    origin: 'Castilla y León'
  },
  {
    name: 'Cullerot',
    year: 2022,
    type: 'Vino Blanco',
    vineyard: 'Celler del Roure',
    origin: 'Valencia'
  },
  {
    name: 'Arrayán Rosado',
    year: 2022,
    type: 'Vino Rosado',
    vineyard: 'Arrayán',
    origin: 'Méntrida'
  }
];

const spainWinesDocuments = spainWines.map(
  (spainWine) => new SpainWine(spainWine)
);

connectDB()
  .then(async () => {
    const allSpainWines = await SpainWine.find();
    if (allSpainWines.length) {
      await SpainWine.collection.drop();
    }
  })
  .catch((error) => console.log(`Error deleting data: ${error}`))
  .then(async () => {
    await SpainWine.insertMany(spainWinesDocuments);
  })
  .catch((error) => console.log(`Error creating data: ${error}`))
  .finally(() => mongoose.disconnect());
