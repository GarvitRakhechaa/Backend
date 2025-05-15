import express from "express"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()
const app = express()
const port = process.env.PORT || 4000

// console.log(process.env);

app.use(cors())

app.get("/" , (req, res) => {
    res.send("hello user")
    }) 

app.get("/:value" , (req, res) => {
    res.send(`hello ${req.params.value}`)
}) 

app.get("/piyush" , (req, res) => {
    res.send("hello grand pituysg")
    }) 

app.listen(port , ()=>{
    console.log(`app is listening on ${port}`);
    
})