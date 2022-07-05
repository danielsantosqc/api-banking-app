const express = require('express')
const router = express.Router();

const validatorHandler = require('../../middlewares/validator_handler');
const { dtoGetUser, dtoCreateUser, dtoUpdateUser, dtoDeleteUser } = require('../../dto-schema/user_dto')

//requires users and create new instance of user, for user methods of User
const User = require('./users_controller');
const userMethod = new User


router.get('/', async (req, res, next) => {
  const result = await userMethod.find();
  res.json(result);
});

router.get('/:id',
  validatorHandler(dtoGetUser, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const result = await userMethod.findOne(id);
      res.json({
        message: result
      });
    } catch (error) {
      next(error)
    }

  });


router.post('/',
  validatorHandler(dtoCreateUser, 'body'),
  async (req, res, next) => {
    const body = req.body;
    const newUser = await userMethod.create(body);

    res.status(201).json({
      message: 'Recebido e creado con sucesso',
      data: newUser,
    })
  })

router.patch('/:id',
  validatorHandler(dtoGetUser, 'params'),
  validatorHandler(dtoUpdateUser, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const result = await userMethod.update(id, body)
      res.status(200).json({
        message: result
      })
    } catch (error) {
      next(error)
    }
  })

router.delete('/:id',
  validatorHandler(dtoDeleteUser, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await userMethod.delete(id)
      res.json({
        message: result
      });
    } catch (error) {
      next(error)
    }
  })





module.exports = router;
