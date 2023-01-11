//Dependencies  
const express = require('express');
const cors = require ("cors")

//Config
const app = express();

//Mid-Ware
app.use(cors());
app.use(express.json());

//Routes
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("*", (req, res) => {
    res.status(404).send("Not found!")
})

module.exports = app