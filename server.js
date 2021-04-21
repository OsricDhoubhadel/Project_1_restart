require('./model/survive') // initialize all of the scenes

const sceneRoutes = require('./routes/scene')

const express = require('express')
const app = express()
const port = 3000 || process.env.PORT
const path = require("path");

app.use(express.static(path.join(__dirname, "images")));
app.use('/scene', sceneRoutes)

app.get('/', (req, res) => {
    res.redirect('/scene/intro')
})

app.listen(port, () => {
  console.log(`Game server listening at http://localhost:${port}`)
})