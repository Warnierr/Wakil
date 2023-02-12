const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 2021
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schemas/index.js')
app.use(cors())

app.get('/', (req, res) => {
    res.send('Bismillah !')
})

/* Importation du mongoDBClient.js */
const mongoDBClient = require('./mongoClient')

// API REST
const Product = require('./models/product');
app.get('/products', async(req, res) => {
    const products = await Product.find({})
    try {
        res.send(products)
    } catch(e) {
        res.status(500).send(err)
    }
})

app.get('/products/:category', async(req, res) => {
    const category = req.params.category
    const products = await Product.find({ category : category})
    try {
        res.send(products)
    } catch(e) {
        res.status(500).send(err)
    }
})

// GRAPHQL UI
app.use(
    '/graphql',
    graphqlHTTP({
        schema : schema,
        graphiql: true,
    }),
);


app.listen(PORT, () => {
    /* Connexion au localhost via le port */
    console.log(`Serv run sur le port http://localhost:${PORT}`)
    /* Connexion au client mongoDB */
    mongoDBClient.initialize()
})

