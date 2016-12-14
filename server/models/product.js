var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = new mongoose.Schema({

		name: {type: String, required: true, minlength: 2},
		image: {type: String},
		description: {type: String}, 
		quantity: {type: Number}
		
	}, {timestamps: true})

mongoose.model('Product', ProductSchema);
mongoose.Promise = global.Promise;