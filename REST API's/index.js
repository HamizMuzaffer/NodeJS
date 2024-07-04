const express = require("express")
const users = require("./MOCK_DATA.json")
const app = express()

app.get("/users",(req,res)=>{
    const html = `
    <ul>${users.map((user)=>`<li>${user.first_name}</li>`)}</ul>`
   return res.send(html)
})

// REST API's

app.get("/api/users", (req, res) => {
    return res.json(users)
})

app.get("/users/:id", (req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=> user.id === id)
    res.json(user)
})

const PORT = 3000;

app.listen(PORT, () => console.log("Server Started"))