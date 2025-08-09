import express from "express"

const app = express()



app.get("/getUserData", (req, res) => {
    // Logic of DB call and get user Data
    // try {
    //     res.status(404).send()
    // } catch (error) {
        
    // }
    throw new Error("dfg");

} )

app.use("/", (err, req, res, next) => {
    if (err) {
        res.status(401).send("Error")
    }
})

app.listen(8000, () => {
    console.log("Server is running");
    
})
