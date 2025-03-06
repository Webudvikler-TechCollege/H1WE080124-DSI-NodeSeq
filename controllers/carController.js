import express from 'express'
import carModel from '../models/carModel.js'
import brandModel from '../models/brandModel.js'
import categoryModel from '../models/categoryModel.js'
export const carController = express.Router()

// Route to list (READ)
carController.get('/cars', async (req, res) => {
    try {
        const data = await carModel.findAll({
            attributes: ['id', 'model'],
            include: {
                model: brandModel,
                attributes: ['title']
            }
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
        const { id } = req.params
        const data = await carModel.findOne({
            where: {
                id: id
            },
            include: [
                {
                    model: brandModel,
                    attributes: ['title']
                },
                {
                    model: categoryModel,
                    attributes: ['title']
                }
            ]
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

// Route to create (CREATE)
carController.post('/cars', async (req, res) => {
    try {
        const data = await carModel.create(req.body)
        res.status(201).json(data)
    } catch (error) {
        const errorMessage = `Could not create car`
        res.status(500).json({
            message: errorMessage,
            content: error.message
        })
    }
})

// Route to update (UPDATE)
carController.put('/cars/:id([0-9]+)', async (req, res) => {
    try {
        const { id } = req.params
        const data = await carModel.update(
            req.body, 
            {
                where: { id }
            }
        )
        res.json({
            message: `Car ID #${id} was updated`
        })
    } catch (error) {
        const errorMessage = `Could not update car`
        res.status(500).json({
            message: errorMessage,
            content: error.message
        })
    }
})

// Route to delete (DELETE)
carController.delete('/cars/:id([0-9]+)', async (req, res) => {
    try {
        const { id } = req.params

        await carModel.destroy({
            where: { id }
        })

        res.json({
            message: `Car #${id} was deleted`
        })
    } catch (error) {
        const errorMessage = `Could not delete car`
        res.status(500).json({
            message: errorMessage,
            content: error.message
        })        
    }
})