const app = require('./app');

require('dotenv').config()

const PORT = process.env.PORT || 9000

app.listen(PORT, (req, res) => {
    console.log(`Listening on Port ${PORT}`)
})
