app.factory('ordersFactory', ['$http', function($http) {
  // constructor for our factory
  var orders = [];
  var order = {};
  function OrdersFactory(){
    var _this = this;

    this.index = function(callback){
      $http.get('/orders').then(function(data){
        orders = data.data; 
        callback(orders); 
      })
    };

    this.create = function(newOrder,callback){
      $http.post('/order', newOrder).then(function(data){
        if(typeof(callback) == 'function'){
          callback(data.data);
        }
      })
    };
  

  };
  return new OrdersFactory();
}]);