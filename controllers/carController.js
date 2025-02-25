import express from 'express'
export const carController = express.Router()

carController.get('/cars', async (req, res) => {
    try {
        res.send('List of records')        
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
        res.send(`Create record`)
    } catch (error) {
        res.send(`Fail to create record: ${error}`)   
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