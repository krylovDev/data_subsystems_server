import mongoose from "mongoose";

const Card = new mongoose.Schema({
	CardNumber: {
		type: String,
		minlength: 16,
		maxlength: 16,
		required: true
	},
	ExpDate: {
		type: String,
		required: true
	},
	Cvv: {
		type: String,
		minlength: 3,
		maxlength: 3,
		required: true
	},
	Amount: {
		type: String,
		required: true
	},
	RequestId: {
		type: Number
	},
}, )

export default new mongoose.model('Card', Card)
