import express from 'express'
import dotenv from 'dotenv'
import sequelize from './config/sequelizeConfig.js'
import carModel from './models/carModel.js'

dotenv.config()
const app = express()

const port = process.env.PORT || 4000

app.get('/', async (req, res) => {
    try {
        await sequelize.authenticate()
        res.send('Connection success')
    } catch (error) {
        res.send(error)        
    }
})

app.get('/sync', async (req, res) => {
    try {
        await sequelize.sync({ force: true })
        res.send('Synchronize success')
    } catch (error) {
        res.send(error)        
    }
})

app.get('*', (req, res) => {
    res.status(200).json({ 
        message: '404 - File not found'
    })
})

app.listen(port, () => {
    console.log(`Server runs at http://localhost:${port}`);
})