import express from 'express'
import dotenv from 'dotenv'
import dbConfig from './config/dbConfig.js'
import carModel from './models/carModel.js'
import { dbController } from './controllers/dbController.js'
import { carController } from './controllers/carController.js'

dotenv.config()
const app = express()

const port = process.env.PORT || 4000

app.get('/', async (req, res) => {
    res.send('Velkommen til bilbasen')
})

app.use(dbController, carController)

app.get('*', (req, res) => {
    res.status(200).json({ 
        message: '404 - File not found'
    })
})

app.listen(port, () => {
    console.log(`Server runs at http://localhost:${port}`);
})