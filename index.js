import express from 'express'
import dotenv from 'dotenv'
import { dbController } from './controllers/dbController.js'
import { carController } from './controllers/carController.js'
import { brandController } from './controllers/brandController.js'
import { categoryController } from './controllers/categoryController.js'

dotenv.config()
const app = express()
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT || 4000

app.get('/', async (req, res) => {
    res.send('Velkommen til bilbasen')
})

app.use(
    carController,
    categoryController,
    brandController,
    dbController
)

app.get('*', (req, res) => {
    res.status(200).json({ 
        message: '404 - File not found'
    })
})

app.listen(port, () => {
    console.log(`Server runs at http://localhost:${port}`);
})