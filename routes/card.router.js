import { Router } from "express";
import CardController from '../controllers/card.controller.js'
import creditCardValidateValues from "../utils/validation.requests.js";

const cardRouter = new Router()

cardRouter.post("/",creditCardValidateValues,CardController.create)

export default cardRouter
