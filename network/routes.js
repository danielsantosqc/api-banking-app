const express = require('express');
const userRouter = require('../components/user/users_router');

function routesApi(app) {

  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', userRouter);
  // router.use('categories', catogoriesRouter);
  // router.use('products', productsRouter);
}

module.exports = routesApi;
