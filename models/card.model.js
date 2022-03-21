import mongoose from "mongoose";

const Card = new mongoose.Schema({
	CardNumber: {
		type: Number,
		minlength: 16,
		maxlength: 16,
		required: true
	},
	ExpDate: {
		type: Number,
		required: true
	},
	Cvv: {
		type: Number,
		minlength: 3,
		maxlength: 3,
		required: true
	},
	Amount: {
		type: Number,
		required: true
	},
	RequestId: {
		type: Number
	},
}, )

export default new mongoose.model('Card', Card)
