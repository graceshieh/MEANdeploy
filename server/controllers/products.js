
var mongoose = require('mongoose');
var Product = mongoose.model('Product');

function ProductsController(){
  this.index = function(req,res){
    Product.find({}, function(err, products){
      if(err){
        console.log("error");
      }
      else{
        res.json(products);
      }
    })
  };

  this.create = function(req,res){
    console.log(req.body);
    Product.create(req.body, function(err, result){
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
    Product.remove({_id:req.params.id}, function(err, result){
      if(err){
        console.log(err); 
      }
      else{
        res.json({data:result});
      }
    })
  }

}
module.exports = new ProductsController(); 