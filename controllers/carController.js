import express from 'express'
import carModel from '../models/carModel.js';
export const carController = express.Router()

carController.get('/cars', async (req, res) => {
    try {
        const result = await carModel.findAll()        
        res.send(result)        
    } catch (error) {
        res.send(`Get records: ${error}`)           
    }
})

carController.get('/cars/:id([0-9]+)', async (req, res) => {
    try {
        const { id } = req.params;
        res.send(`Get details for record #${id}`)
    } catch (error) {
        res.send(`Fail to get details: ${error}`)   
    }    
})

carController.post('/cars', async (req, res) => {    
    try {
        const result = await carModel.create(req.body)
        res.status(201).send(`Record created successfully`)
    } catch (error) {
        res.status(500).send(`Fail to create record: ${error}`)   
    }    
})

carController.put('/cars/:id([0-9]+)', async (req, res) => {
    try {
        const { id } = req.params;
        res.send(`Update record: ID#${id}`)
    } catch (error) {
        res.send(`Fail to update record: ${error}`)   
    }    
})

carController.delete('/cars/:id([0-9]+)', async (req, res) => {
    try {
        const { id } = req.params;
        res.send(`Delete record: ID#${id}`)
    } catch (error) {
        res.send(`Fail to update record: ${error}`)   
    }    
})