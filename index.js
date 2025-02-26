import express from 'express'
import dotenv from 'dotenv'
import { dbController } from './controllers/dbController.js'
import { carController } from './controllers/carController.js'
import { brandController } from './controllers/brandController.js'
import { setRelations } from './models/relations.js'

// Dotenv access
dotenv.config()

// Global Settings
const app = express()
app.use(express.urlencoded({ extended: true }))
const port = process.env.PORT || 4000
setRelations()

// Root route
app.get('/', async (req, res) => {
    res.send('Velkommen til bilbasen')
})

// Controller routes
app.use(
    carController,
    brandController,
    dbController
)

// 404 fall back route
app.get('*', (req, res) => {
    res.status(200).json({ 
        message: '404 - File not found'
    })
})

// Server setup
app.listen(port, () => {
    console.log(`Server runs at http://localhost:${port}`);
})