var userController = require('./userController.js');


module.exports = function (app) {
  // app === userRouter injected from middlware.js
  app.post('/login', userController.login);
  app.post('/signup', userController.signup);
  app.post('/logout', userController.logout);
  app.get('/signedin', userController.checkAuth)
  app.get('/:id', userController.serveData);
  
};
