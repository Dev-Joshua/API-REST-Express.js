const express = require('express');
const routerApi = require('./routes/index');

const app = express();
const port = 3001;

app.use(express.json());

//Definir ruta por defecto
app.get('/', (request, response) => {
  response.send('Hola mi server express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Soy el nuevo endpoint!');
});

//Escuchar el puerto
app.listen(port, () => {
  console.log('My port ' + port);
});

routerApi(app);
