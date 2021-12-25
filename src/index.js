const express = require("express")
const app = express()

const jokes = require("./jokes.json")

app.get("/random_joke", (req, res) =>{
    res.json(jokes[Math.floor(Math.random() * jokes.length)])
})
let port = process.env.PORT || 8000
app.listen(port, e=>{
    console.log("Server running on port "+ port)
})
