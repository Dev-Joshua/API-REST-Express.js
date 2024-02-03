const express = require('express');
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
  res.json({
    name: 'Product 1',
    price: '120',
  });
});

//Escuchar el puerto
app.listen(port, () => {
  console.log('My port ' + port);
});
