import express from 'express'
import categoryModel from '../models/categoryModel.js'

export const categoryController = express.Router()

categoryController.get('/categories', async (req, res) => {
    try {        
        res.send('List of records')        
    } catch (error) {
        res.send(`Get records: ${error}`)           
    }
})

categoryController.get('/categories/:id([0-9]+)', async (req, res) => {
    try {
        const { id } = req.params;
        res.send(`Get details for record #${id}`)
    } catch (error) {
        res.send(`Fail to get details: ${error}`)   
    }    
})

categoryController.post('/categories', async (req, res) => {
    try {
        res.send(`Create record`)
    } catch (error) {
        res.send(`Fail to create record: ${error}`)   
    }    
})

categoryController.put('/categories/:id([0-9]+)', async (req, res) => {
    try {
        const { id } = req.params;
        res.send(`Update record: ID#${id}`)
    } catch (error) {
        res.send(`Fail to update record: ${error}`)   
    }    
})

categoryController.delete('/categories/:id([0-9]+)', async (req, res) => {
    try {
        const { id } = req.params;
        res.send(`Delete record: ID#${id}`)
    } catch (error) {
        res.send(`Fail to update record: ${error}`)   
    }    
})