import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app = express()

const port = process.env.PORT || 4000

app.get('/', (req, res) => {
    res.status(200).json({ 
        message: 'Velkommen'
    })
})

app.get('*', (req, res) => {
    res.status(200).json({ 
        message: '404 - File not found'
    })
})

app.listen(port, () => {
    console.log(`Server runs at http://localhost:${port}`);
})