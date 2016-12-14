app.factory('customersFactory', ['$http', function($http) {
  // constructor for our factory
  var customers = [];
  var customer = {};
  function CustomersFactory(){
    var _this = this;

    this.index = function(callback){
      $http.get('/customers').then(function(data){
        customers = data.data; 
        callback(customers); 
      })
    };

    this.create = function(newCustomer, callback){
      $http.post('/customer', newCustomer).then(function(data){
        console.log(data); 
        if (typeof(callback) == 'function'){
          callback(data.data);
        }
      })
    }; 

    this.delete = function(id, callback){
      $http.delete('/customer/'+id).then(function(data){ 
        if(typeof(callback) == 'function'){
          callback(data.data);
        }
      })
    }

  
  };
  return new CustomersFactory();
}]);