import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app = express()
import mongoose from 'mongoose'
import routes from './routes/routes.js'

// Middleware
app.use(express.json())

// Routes
app.use('/api', routes)


const PORT = process.env.PORT || 4000

mongoose.connect(process.env.MONGO_URL)
.then(() => {
        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`)
        })
        console.log('Successfully connected to DB')
    })
    .catch((err) => {
        console.log(err)
    })