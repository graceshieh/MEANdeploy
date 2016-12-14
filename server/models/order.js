var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var OrderSchema = new mongoose.Schema({

		_customer: {type: Schema.Types.ObjectId, ref: 'Customer'},
		_item: {type: Schema.Types.ObjectId, ref: 'Product'},
		quantity: {type: Number}
		
	}, {timestamps: true})

mongoose.model('Order', OrderSchema);
mongoose.Promise = global.Promise;