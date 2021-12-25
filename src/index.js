const express = require("express")
const app = express()

const jokes = require("./jokes.json")

app.get("/random_joke", (req, res) =>{
    res.json(jokes[Math.floor(Math.random() * jokes.length)])
})

app.listen(7000, e=>{
    console.log("Server running")
})