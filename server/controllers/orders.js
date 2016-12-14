
var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Customer = mongoose.model('Customer');
var Product = mongoose.model('Product');

function OrdersController(){
  this.index = function(req,res){
    Order.find({})
      .populate('_customer')
      .populate('_item')
      .exec(function(err, orders){
        if(err){
          console.log("error");
        }
        else{
          res.json(orders)
        }
      })
  };

  this.create = function(req,res){
    var order = new Order(req.body); 
    Customer.findOne({name: req.body._customer}, function(err, customers){
      order._customer = customers._id; 
    })
    Product.findOne({name: req.body._item}, function(err, products){
        console.log('product id: ', products._id);
        order._item = products._id; 
        console.log('final order: ',order);
        Order.create(order, function(err, result){
          if(err){
            console.log("error");
          }
          else{
            res.json({data:result});
          }
        })
    })
    
    // Order.create(req.body, function(err, result){
    //   if(err){
    //     console.log(err); 
    //   }
    //   else{
    //     res.json({data:result});
    //   }
    // })
  };

  this.delete = function(req,res){
    console.log(req.params.id);
    Order.remove({_id:req.params.id}, function(err, result){
      if(err){
        console.log(err); 
      }
      else{
        res.json({data:result});
      }
    })
  }

}
module.exports = new OrdersController(); 