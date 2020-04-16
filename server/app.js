const path = require('path');

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 8001;

app.get('/api/products', (req, res) => {
  res.sendFile(path.join(__dirname, 'data', 'products.json'));
});
app.get('/api/cars-small', (req, res) => {
  res.sendFile(path.join(__dirname, 'data', 'cars-small.json'));
});
app.get('/api/cars-medium', (req, res) => {
  res.sendFile(path.join(__dirname, 'data', 'cars-medium.json'));
});
app.get('/api/cars-large', (req, res) => {
  res.sendFile(path.join(__dirname, 'data', 'cars-large.json'));
});

app.listen(port, () => {
  console.log(`[products] API listening on port ${port}.`);
});
