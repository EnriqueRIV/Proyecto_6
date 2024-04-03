const {
  getSpainWines,
  getSpainWinesById,
  postSpainWine,
  putSpainWine,
  deleteSpainWine,
  getSpainWinesByName,
  getSpainWinesByYear
} = require('../controllers/spainwine');

const spainWineRoutes = require('express').Router();

spainWineRoutes.get('/', getSpainWines);
spainWineRoutes.get('/id/:id', getSpainWinesById);
spainWineRoutes.get('/name/:name', getSpainWinesByName);
spainWineRoutes.get('/year/:year', getSpainWinesByYear);
spainWineRoutes.post('/create', postSpainWine);
spainWineRoutes.put('/edit/:id', putSpainWine);
spainWineRoutes.delete('/delete/:id', deleteSpainWine);

module.exports = spainWineRoutes;
