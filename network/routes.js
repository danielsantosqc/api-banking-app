const routerUser = require('../components/user/router_users');

function routesApi(app) {
  app.use('/users', routerUser);
}

module.exports = routesApi;
