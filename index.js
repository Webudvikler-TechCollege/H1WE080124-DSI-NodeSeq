import express from 'express'
const app = express()
const port = 3232

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