import express from "express"
import { adminAuth, userCheck } from "./Middleware/auth.middleware.js";

const app = express()

app.use("/admin", adminAuth)

app.get("/user",userCheck, (req, res) => {
    res.status(201).send("It is valid user")
} )

app.get("/admin/getAllData", (req, res) => {
    res.send("Get all the Data")
})

app.delete("/admin/deleteAllData", (req, res) => {
    res.send("All users will we deleted")
})

app.listen(8000, () => {
    console.log("Server is running");
    
})
