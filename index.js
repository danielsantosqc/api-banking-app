const express = require('express');
const app = express();
const port = 3000;

//para recibir json del cliente
app.use(express.json());

const { faker } = require('@faker-js/faker');

// const host = '192.168.0.1'
const host = 'localhost'

app.post('/', (req, res) => {
  const body = req.body;
  res.json(
    {
      message: 'created',
      data: body
    })
  res.send('Hola server en express')
})

app.get('/endpoint', (req, res) => {
  res.send('Hola soy nuevo end point')
})

app.get('/productos', (req, res) => {
  res.json([{
    name: 'naranja',
    price: 1000
  },
  {
    name: 'naranja',
    price: 1000
  },
  ])
})

app.get('/categories/:categoryId', (req, res) => {
  res.json([{
    name: 'naranja',
    price: 1000
  },
  {
    name: 'naranja',
    price: 1000
  },
  ])
})

app.get('/users', (req, res) => {
  const {size} = req.query
  const limit = size || 10

  const products = [];
  for (let index = 0; index < limit; index++) {
    let name = faker.name.findName();
    let age = faker.datatype.number({ min: 18, max: 100 });
    console.log(age);
    products.push({
      name: name,
      age: age,
      email: faker.internet.email(`${name}`, `${age}`),
      job: faker.phone.number('+55 ## 9########'),
      job: faker.name.jobArea(),
    })

  }
  res.json(products)
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: "nombre",
    age: 23,
  })
});











app.listen(port, () => {
  console.log(`Listening in: http://${host}:${port}`);
});
