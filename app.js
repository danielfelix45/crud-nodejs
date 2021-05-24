const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const handlebars = require('express-handlebars')
const app = express()
const urlencondeParser = bodyParser.urlencoded({extended: false})
const sql = mysql.createPool({
    user: "b00ed5b21b6e83",
    password: "7bf335b1",
    host: "us-cdbr-east-03.cleardb.com",
    database: "heroku_bcfbdc9d1a1d611"
})

let port = process.env.PORT || 3000;
app.use('/css', express.static('css'))
app.use('/js', express.static('js'))
app.use('/img', express.static('img'))


// Template Engine
    app.engine("handlebars", handlebars({defaultLayout: 'main'}))
    app.set("view engine", "handlebars")
    


// Routes end Templates
    app.get("/", function(req, res) {
        //res.send('essa é minha página inicial')
        //res.sendFile(__dirname+ "/index.html")
        //console.log(req.params.id)
        res.send('Oi')
    })
    



// Start server
app.listen(port, function(req, res) {
    console.log('Servidor rodando!')
})
