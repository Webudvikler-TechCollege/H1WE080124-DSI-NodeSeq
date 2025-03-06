import express from 'express'
import categoryModel from '../models/categoryModel.js'
export const categoryController = express.Router()

// Route to list (READ)
categoryController.get('/categories', async (req, res) => {
    try {
        const data = await categoryModel.findAll({
            attributes: ['id', 'title']
        })

        if(!data || data.length === 0) {
            return res.json({ 
                message: 'No data found'
            })
        }

        res.json(data)
    } catch (error) {
        console.error(`Could not get category list: ${error}`)
    }
})

// Route to details (READ)
categoryController.get('/categories/:id([0-9]+)', async (req, res) => {
    try {
        const { id } = req.params
        const data = await categoryModel.findOne({
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
        console.error(`Could not get category details: ${error}`)        
    }
})

categoryController.post('/categories', async (req, res) => {
    try {
        const data = await categoryModel.create(req.body)
        res.status(201).json(data)
    } catch (error) {
        const errorMessage = `Could not create category`
        res.status(500).json({
            message: errorMessage,
            content: error.message
        })
    }
})

categoryController.put('/categories/:id([0-9]+)', async (req, res) => {
    try {
        const { id } = req.params
        const data = await categoryModel.update(
            req.body, 
            {
                where: { id }
            }
        )
        res.json({
            message: `category ID #${id} was updated`
        })
    } catch (error) {
        const errorMessage = `Could not update category`
        res.status(500).json({
            message: errorMessage,
            content: error.message
        })
    }
})

categoryController.delete('/categories/:id([0-9]+)', async (req, res) => {
    try {
        const { id } = req.params

        await categoryModel.destroy({
            where: { id }
        })

        res.json({
            message: `category #${id} was deleted`
        })
    } catch (error) {
        const errorMessage = `Could not delete category`
        res.status(500).json({
            message: errorMessage,
            content: error.message
        })        
    }
})