var customers = require('../controllers/customers.js');
var products = require('../controllers/products.js');
var orders = require('../controllers/orders.js');

module.exports = function(app){
  app.get('/customers', customers.index);
  app.post('/customer', customers.create); 
  app.delete('/customer/:id', customers.delete); 

  app.get('/products', products.index);
  app.post('/product', products.create); 

  app.get('/orders', orders.index);
  app.post('/order', orders.create);
}