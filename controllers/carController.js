import express from 'express'
import carModel from '../models/carModel.js'
export const carController = express.Router()

// Route to list (READ)
carController.get('/cars', async (req, res) => {
    try {
        const data = await carModel.findAll({
            attributes: ['id', 'brand']
        })

        if(!data || data.length === 0) {
            return res.json({ 
                message: 'No data found'
            })
        }

        res.json(data)
    } catch (error) {
        console.error(`Could not get car list: ${error}`)
    }
})

// Route to details (READ)
carController.get('/cars/:id([0-9]+)', async (req, res) => {
    try {
        const { id, hest } = req.params
        const data = await carModel.findOne({
            attributes: ['id', 'brand', 'year'],
            where: {
                id: id
            }
        })

        if(!data) {
            return res.json({ 
                message: 'No data found'
            })
        }

        res.json(data)

    } catch (error) {
        console.error(`Could not get car details: ${error}`)        
    }
    
})
