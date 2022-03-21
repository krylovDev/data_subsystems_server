import { celebrate, Joi } from 'celebrate'

const creditCardValidateValues = celebrate({
	body: Joi.object().keys({
		CardNumber: Joi.number().unsafe().required(),
		ExpDate: Joi.number().required(),
		Cvv: Joi.number().required(),
		Amount: Joi.number().required(),
	})
})
export default creditCardValidateValues
