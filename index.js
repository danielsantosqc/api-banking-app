const express = require('express');
const routesApi = require('./network/routes');
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();
const port = process.env.PORT || 3000;
// const host = '192.168.0.108'
const host = 'localhost';


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// (middleware) para recibir json (del body) del cliente
app.use(express.json());
// app.use(cors());

routesApi(app);


app.use('/', express.static('public'));

app.listen(port, () => {
  console.log(`Listening in: http://${host}:${port}`);
});
