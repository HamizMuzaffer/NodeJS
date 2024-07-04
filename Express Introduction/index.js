const express = require("express");
const app = express()
const port = 3001;

app.get("/", (req, res) => {
    return res.send("Hello From HomePage");
})


app.get("/about", (req, res) => {
    return res.send("Hello From AboutPage" + "Hey" + req.query.name + req.query.age);
})

app.listen(port, () => {
    console.log("Server Started")
})

