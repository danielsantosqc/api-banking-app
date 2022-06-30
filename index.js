const express = require('express');
const routesApi = require('./network/routes');
const bodyParser = require('body-parser')

const app = express();
const port = 3000;
// const host = '192.168.0.1'
const host = 'localhost';


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// (middleware) para recibir json (del body) del cliente
app.use(express.json());

routesApi(app);





app.listen(port, () => {
  console.log(`Listening in: http://${host}:${port}`);
});
