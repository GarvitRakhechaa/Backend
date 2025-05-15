import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import db from "./utils/db.js"


dotenv.config()
const app = express()
const port = process.env.PORT || 4000


app.use(cors({
    origin: process.env.BASE_URL,
    credentials:true,
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

 


app.get("/" , (req, res) => {
    res.send("hello user")
    }) 

app.get("/:value" , (req, res) => {
    res.send(`hello ${req.params.value}`)
}) 

app.get("/piyush" , (req, res) => {
    res.send("hello grand pituysg")
    }) 

db()

app.listen(port , ()=>{
    console.log(`app is listening on ${port}`);
    
})