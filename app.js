import express from "express";
import mongoose from "mongoose";
import cardRouter from "./routes/card.router.js";
import errorsHandler from "./middlewares/errors.middleware.js";
import {errors} from "celebrate";
import NotFoundError from "./errors/not-found.error.js";

const PORT = 5000
const DB_URL = `mongodb+srv://admin:admin@cluster0.crb4w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const app = express()
app.use(express.json())
app.use(cardRouter)

app.use((req, res, next) => next(new NotFoundError('Неверный запрос')));

app.use(errors())
app.use(errorsHandler)

async function startApp() {
	try {
		await mongoose.connect(DB_URL)
		app.listen(PORT, () => {
			console.log('app started')
		})
	} catch (e) {
		console.log(e)
	}
}

startApp()

