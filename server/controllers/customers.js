
var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

function CustomersController(){
  this.index = function(req,res){
    Customer.find({}, function(err, customers){
      if(err){
        console.log("error");
      }
      else{
        res.json(customers);
      }
    })
  };

  this.create = function(req,res){
    console.log(req.body);
    Customer.create(req.body, function(err, result){
      if(err){
        console.log(err); 
      }
      else{
        res.json({data:result});
      }
    })
  };

  this.delete = function(req,res){
    console.log(req.params.id);
    Customer.remove({_id:req.params.id}, function(err, result){
      if(err){
        console.log(err); 
      }
      else{
        res.json({data:result});
      }
    })
  }

}
module.exports = new CustomersController(); 