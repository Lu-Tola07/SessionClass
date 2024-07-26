const express = require('express')
const app = express()
const port = 2000
app.use(express.json())
const db = require('./config/db')
const router = require('./routers/schoolRouter')

app.get("/", (req, res) => {
    res.send("Welcome to my first hosting.")
});
app.use(router);

app.use("/api/v1", router);

app.listen(port, ()=>{
    console.log(`app is listening to ${port}`)
})