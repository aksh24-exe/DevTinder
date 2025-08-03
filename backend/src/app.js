import express from "express"

const app = express()

app.use("/test",(req, res) => {
    res.send("Hello From the Server")
})


app.get("/home", (req, res) => {
    res.json({
        "msg":"Hello"
    })
})

app.listen(8000, () => {
    console.log("Server is running");
    
})
