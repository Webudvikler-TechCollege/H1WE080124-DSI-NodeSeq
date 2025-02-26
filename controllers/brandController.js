import express from 'express'
import brandModel from '../models/brandModel.js'
export const brandController = express.Router()

// Route to list (READ)
brandController.get('/brands', async (req, res) => {
    try {
        const data = await brandModel.findAll({
            attributes: ['id', 'title']
        })

        if(!data || data.length === 0) {
            return res.json({ 
                message: 'No data found'
            })
        }

        res.json(data)
    } catch (error) {
        console.error(`Could not get brand list: ${error}`)
    }
})

// Route to details (READ)
brandController.get('/brands/:id([0-9]+)', async (req, res) => {
    try {
        const { id } = req.params
        const data = await brandModel.findOne({
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
        console.error(`Could not get brand details: ${error}`)        
    }
})

brandController.post('/brands', async (req, res) => {
    try {
        const data = await brandModel.create(req.body)
        res.status(201).json(data)
    } catch (error) {
        const errorMessage = `Could not create brand`
        res.status(500).json({
            message: errorMessage,
            content: error.message
        })
    }
})

brandController.put('/brands/:id([0-9]+)', async (req, res) => {
    try {
        const { id } = req.params
        const data = await brandModel.update(
            req.body, 
            {
                where: { id }
            }
        )
        res.json({
            message: `brand ID #${id} was updated`
        })
    } catch (error) {
        const errorMessage = `Could not update brand`
        res.status(500).json({
            message: errorMessage,
            content: error.message
        })
    }
})

brandController.delete('/brands/:id([0-9]+)', async (req, res) => {
    try {
        const { id } = req.params

        await brandModel.destroy({
            where: { id }
        })

        res.json({
            message: `brand #${id} was deleted`
        })
    } catch (error) {
        const errorMessage = `Could not delete brand`
        res.status(500).json({
            message: errorMessage,
            content: error.message
        })        
    }
})