import Card from "../models/card.model.js";

class CardService{
	
	async create(cardPay){
			return await Card.create(cardPay)
	}
	
}

export default new CardService()
