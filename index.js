const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const port = 3001;

//Definir ruta por defecto
app.get('/', (request, response) => {
  response.send('Hola mi server express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Soy el nuevo endpoint!');
});

app.get('/products', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
  // res.json([
  //   {
  //     name: 'Product 1',
  //     price: '120',
  //   },
  //   {
  //     name: 'Product 2',
  //     price: '350',
  //   },
  //   {
  //     name: 'Product 3',
  //     price: '1000',
  //   },
  // ]);
});

//Los endopoint de forma especifica deben ir antes de los endpoint dinamicos
app.get('/products/filter', (req, res) => {
  res.send('Yo soy un filter');
});

//Captura de parametros que vienen por url(endpoint dinamico)
app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 3',
    price: '1000',
  });
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

//Parametros query
app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('No hay parametros');
  }
});

//Escuchar el puerto
app.listen(port, () => {
  console.log('My port ' + port);
});
