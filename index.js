const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 2021

app.use(cors())

app.get('/', (req, res) => {
    res.send('Bismillah !')
})

app.listen(PORT, () => {
    console.log(`Serv run sur le port http://localhost:${PORT}`)
})