const express = require('express');
const cors = require('cors');
const routerApi = require('./routes/index');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/errorHandler');

const app = express();
const port = 3001;

app.use(express.json());

// const whitelist = ['http://127.0.0.1:5500'];
// const options = {
//   origin: (origin, callback) => {
//     if (whitelist.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('No autorizado'));
//     }
//   },
// };
app.use(cors());

//Definir ruta por defecto
app.get('/', (request, response) => {
  response.send('Hola mi server express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Soy el nuevo endpoint!');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

//Escuchar el puerto
app.listen(port, () => {
  console.log('My port ' + port);
});
