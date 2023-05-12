require("dotenv").config();
const express = require("express"); // import express package
const Book = require("./books/model") // import Book model
const Author =require("./author/model")
const bookRouter = require("./books/routes")
const authorRouter = require("./author/routes")
const port = 5001; // defines the port for the server
const app = express() // stores express library package

app.use(express.json()) // server will expect json in the body of the requests and will send json back in the response once a request is made

const syncTables = () => {
    Book.sync()
    Author.sync()
} // sync tables on our database. if the table doesn't already exist, then create a new one

app.use(bookRouter)

app.use(authorRouter)

app.get("/health", (req, res) => {
    res.status(200).json(
        {message: "Server is running"}
        )
})

app.listen(port, () => {
    syncTables() // call sync tables function once our server is running 
    console.log("Server is listening")
})