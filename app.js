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
        res.render('index')
    })
    app.get("/inserir", function(req, res) {
        res.render("inserir")
    })
    app.get("/select/:id?", function(req, res) {
        if(!req.params.id){
            sql.getConnection(function(err, connection){
                connection.query("select * from user order by id asc", function(err,results,fields){
                    res.render("select", {data: results})
                }) 
            })
            
        } else{
            sql.getConnection(function(err, connection){
                sql.query("select * from user where id=? order by id asc",[req.params.id], function(err,results,fields){
                    res.render("select", {data: results})
                })
            })
            
        }
    })
    /*app.post("/controllerForm", urlencondeParser, function(req, res) {
        sql.query("insert into user values(?,?,?)", [req.body.id,req.body.name,req.body.age])
        res.render("controllerForm", {name: req.body.name})
    })
    app.get('/deletar/:id', function(req, res){
        sql.query("delete from user where id=?", [req.params.id])
        res.render('deletar')
    })
    app.get("/update/:id", function(req, res){
        sql.query("select * from user where id=?", [req.params.id], function(err,results,fields){
            res.render("update", {id:req.params.id, name:results[0].name, age:results[0].age})
        })    
    })
    app.post("/controllerUpdate", urlencondeParser, function(req, res){
        sql.query("update user set name=?, age=? where id=?",[req.body.name,req.body.age,req.body.id])
        res.render("controllerUpdate");
    })*/



// Start server
app.listen(port, function(req, res) {
    console.log('Servidor rodando!')
})
