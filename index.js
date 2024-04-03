require('dotenv').config();
const express = require('express');
const { connectDB } = require('./src/config/db');
const { error } = require('console');
const spainWineRoutes = require('./src/api/routes/spainwines');

const PORT = 3001;
const server = express();
const router = express.Router();

connectDB();

server.use(express.json());

server.use('/', router);

server.use('/spainwines', spainWineRoutes);

server.use('*', (req, res, next) => {
  const error = new Error('Route not found!');
  error.status = 404;
  next(error);
});

server.use((error, req, res, next) => {
  return res
    .status(error.status || 500)
    .json(error.message || 'Unexpected error!');
});

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
