import express from "express";
import mongoose from "mongoose";
import cardRouter from "./routes/card.router.js";
import {errors} from "celebrate";

const PORT = 5000
const DB_URL = `mongodb+srv://admin:admin@cluster0.crb4w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const app = express()
app.use(express.json())
app.use(cardRouter)

app.use(errors())

async function startApp() {
	try {
		await mongoose.connect(DB_URL)
		app.listen(PORT, () => {
			console.log(`app started on http://localhost:${PORT}`)
		})
	} catch (e) {
		console.log(e)
	}
}

startApp()

