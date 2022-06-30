const express = require('express')
const router = express.Router();

//requires users and create new instance of user
const User = require('./controller_users');
const userMethod = new User


router.get('/', (req, res) => {
  const result = userMethod.find();
  res.json(result);
  console.log("correcto");
});

router.get('/:id', (req, res) => {
  const { id } = req.params
  const result = userMethod.findOne(id);
  res.json(result);
});


router.post('/', (req, res) => {
  const body = req.body;
  users.push(body);

  res.json({
    message: 'Recibido',
    data: body,
  })
})





module.exports = router;
