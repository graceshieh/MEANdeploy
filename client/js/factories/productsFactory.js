app.factory('productsFactory', ['$http', function($http) {
  // constructor for our factory
  var products = [];
  var product = {};
  function ProductsFactory(){
    var _this = this;

    this.index = function(callback){
      $http.get('/products').then(function(data){
        products = data.data; 
        callback(products); 
      })
    };

    this.create = function(newProduct,callback){
      $http.post('/product', newProduct).then(function(data){
        if(typeof(callback) == 'function'){
          callback(data.data);
        }
      })
    };
  

  };
  return new ProductsFactory();
}]);