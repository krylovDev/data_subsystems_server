import { SUCCESS_CODE } from "../utils/response.code.js";
import ValidationError from "../errors/validation.error.js";
import Card from "../models/card.model.js";

class CardController {
	async create(req, res, next) {
		try {
			const {CardNumber,ExpDate,Cvv,Amount} = req.body
			const CardPay = await Card.create({CardNumber,ExpDate,Cvv,Amount})
			const RequestId = CardPay._id.valueOf()
			console.log(RequestId)
			res.status(SUCCESS_CODE).json({Amount, RequestId})
		} catch (e) {
			if (e.name === 'ValidationError') {
				return next(new ValidationError('Переданы некорректные данные'));
			}
			next(e)
		}
	}
}

export default new CardController()
