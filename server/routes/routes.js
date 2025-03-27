import express from 'express'
const router = express.Router()
import cors from 'cors'

// Middleware
router.use(cors({
    origin: process.env.CLIENT_URL
}))
// router.get('/profile', )


export default router

