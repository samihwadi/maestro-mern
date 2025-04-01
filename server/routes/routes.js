import express from 'express'
const router = express.Router()
import cors from 'cors'
import { calculatePrice } from '../controllers/calculator.js'

router.post('/calculator', calculatePrice)


export default router

