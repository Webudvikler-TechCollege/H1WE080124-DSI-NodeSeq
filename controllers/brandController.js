import express from 'express'
import brandModel from '../models/brandModel.js'

export const brandController = express.Router()

brandController.get('/brands', async (req, res) => {
    try {
        res.send('List of records')        
    } catch (error) {
        res.send(`Get records: ${error}`)           
    }
})

brandController.get('/brands/:id([0-9]+)', async (req, res) => {
    try {
        const { id } = req.params;
        res.send(`Get details for record #${id}`)
    } catch (error) {
        res.send(`Fail to get details: ${error}`)   
    }    
})

brandController.post('/brands', async (req, res) => {
    try {
        res.send(`Create record`)
    } catch (error) {
        res.send(`Fail to create record: ${error}`)   
    }    
})

brandController.put('/brands/:id([0-9]+)', async (req, res) => {
    try {
        const { id } = req.params;
        res.send(`Update record: ID#${id}`)
    } catch (error) {
        res.send(`Fail to update record: ${error}`)   
    }    
})

brandController.delete('/brands/:id([0-9]+)', async (req, res) => {
    try {
        const { id } = req.params;
        res.send(`Delete record: ID#${id}`)
    } catch (error) {
        res.send(`Fail to update record: ${error}`)   
    }    
})