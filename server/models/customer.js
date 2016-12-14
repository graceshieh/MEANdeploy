var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CustomerSchema = new mongoose.Schema({

		name: {type: String, required: true, minlength: 2},
		orders: [{type: Schema.Types.ObjectId, ref: 'Order'}]
		
	}, {timestamps: true})

mongoose.model('Customer', CustomerSchema);
mongoose.Promise = global.Promise;