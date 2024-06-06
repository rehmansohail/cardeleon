import express from "express";
import bodyparser from "body-parser";

const app =express()
const port = 3000

let blogContainer=[]

function blog(title,para){
    this.title=title
    this.para=para
}

app.use(express.static("public"))
app.use(bodyparser.urlencoded({ extended: true }))

app.get("/",(req,res)=>{
    res.render("index.ejs",{
        blogContainer
    })
})

app.post("/submit",(req,res)=>{
    console.log(req.body)
    blogContainer.push(new blog(req.body["fname"],req.body["lname"]))
    res.render("index.ejs",{
        blogContainer
    })
})

app.listen(port,()=>{
    console.log(`The server is running on port ${port}`)
})