const express = require('express')
const app = express()

const jwt  = require("jsonwebtoken")

app.use(express.json())
const posts = [{
    username: "Yair",
    title: "Post 1"
},
    {
        username: "Kyle",
        title: "Post 2"
    }
]

app.get('/posts', (req , res) => {
    res.json(posts)
})

app.post('/login', (req , res) => {
    //Authenticate User

    const username = req.body.username
    const user = {name: username}
    const accessToken = jwt.sign(user , process.env.ACCESS_TOKEN_SECRET)
    res.json({accessToken: accessToken})

})

console.log("App listing on port 3000")
app.listen(3000)