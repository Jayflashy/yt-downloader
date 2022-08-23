const express = require('express')
const morgan = require('morgan')
const path = require('path')
const cookieParser = require('cookie-parser')
const port = 3111

const Routes = require('./routes.js')
const app = express()
app.set('view engine', 'ejs')

app.use(morgan("dev")) // log the request for debugging
app.use(express.json()) // parse json bodies
app.use(express.static(path.join(__dirname, '../public')))
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())


// routes

app.use(Routes)

// 404 error
app.use((req, res) => 
    // console.log("Error 404"),
    res.status(404).send('404 Error Page')
)

app.listen(port, () => 
    console.log(`Example app listening on port ${port}!`)
)