import express from "express";
import mongoose from "mongoose";
import cardRouter from "./routes/card.router.js";
import cors from './middlewares/cors.js'

const PORT = 5000
const DB_URL = `mongodb+srv://admin:admin@cluster0.crb4w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const app = express()
app.use(express.json())

app.use(cors)
app.use(cardRouter)

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

