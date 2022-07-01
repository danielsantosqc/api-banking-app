const express = require('express')
const router = express.Router();

//requires users and create new instance of user
const User = require('./controller_users');
const userMethod = new User


router.get('/', (req, res) => {
  const result = userMethod.find();
  res.json(result);
});

router.get('/:id', (req, res) => {
  const { id } = req.params
  const result = userMethod.findOne(id);
  res.json({
    message: result
  });
});


router.post('/', (req, res) => {
  const newUser = req.body;
  userMethod.create(newUser);

  res.json({
    message: 'Recebido e creado con sucesso',
    data: newUser,
  })
})

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const result = userMethod.update(id, body)
  res.json({
    message: result
  })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const result = userMethod.delete(id)
  res.json({
    message: result
  })
})





module.exports = router;
