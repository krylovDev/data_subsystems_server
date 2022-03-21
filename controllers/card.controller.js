import { SUCCESS_CODE } from "../utils/response.code.js";
import ValidationError from "../errors/validation.error.js";
import CardService from '../service/card.service.js'

class CardController {
	async create(req, res, next) {
		try {
			const CardPay = await CardService.create(req.body)
			const RequestId = CardPay._id.valueOf()
			const {Amount} = CardPay
			res.status(SUCCESS_CODE).json({Amount, RequestId})
		} catch (e) {
			if (e.name === 'ValidationError') {
				return next(new ValidationError('Переданы некорректные данные'));
			}
		}
	}
}

export default new CardController()
