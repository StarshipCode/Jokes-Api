const express = require("express")
const app = express()
const path = require("path")
const ejs = require("ejs")

const jokes = require("./jokes.json")
const port = process.env.PORT || 8000

//Configurations
app.set("view engine","ejs")
app.set("views", path.join(__dirname + "/views"))

app.get("/random_joke", (req, res) =>{
    res.json(jokes[Math.floor(Math.random() * jokes.length)])
})

app.get("/", (req, res) => {
    res.render("index.html",{joke:jokes[Math.floor(Math.random() * jokes.length)]})
})

app.listen(port, e=>{
    console.log("Server running on port "+ port)
})
