const express = require("express")
const app = express()
const path = require("path")
//const ejs = require("ejs")

const jokes = require("./jokes.json")
const port = process.env.PORT || 8000

//Configurations
app.set("view engine", "ejs")
app.set("views", path.join(__dirname + "/views"))

//Middlewares
app.use(express.static(path.join(__dirname + "/public")))
app.use(express.urlencoded({ extended: false }))

app.get("/random_joke", (req, res) => {
    res.json(jokes[Math.floor(Math.random() * jokes.length)])
})

app.get("/", (req, res) => {
    res.render("index",{joke:jokes[Math.floor(Math.random() * jokes.length)]})
})

app.get("/ping", (req, res) =>{
    res.render("pong")
})

app.get("/plain", (req, res) => {
    let joke = jokes[Math.floor(Math.random() * jokes.length)]
    res.setHeader('content-type', 'text/plain');
    res.send(joke.setup + "\n" + joke.punchline + "\n")
})
app.get("/plain/:type", (req, res) => {
    let type = req.params.type
    let joke = jokes.filter(e => e.type == type)
    joke = joke[Math.floor(Math.random() * joke.length)]
   if (joke!=undefined) {
        res.setHeader('content-type', 'text/plain');
        res.send(joke.setup + "\n" + joke.punchline + "\n")
    }
    else{
        res.setHeader('content-type', 'text/plain');
        res.send("Not found this kind of joke"+ "\n")
    }
})
app.listen(port, e => {
    console.log("Server running on port " + port)
})
