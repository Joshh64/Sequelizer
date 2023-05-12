const { Router } = require("express")
const authorRouter = Router()
const { addAuthor, getAllAuthors, updateAuthor, deleteAuthor } = require("./controllers")

authorRouter.post("/authors/addAuthor", addAuthor)
authorRouter.get("/authors/getAllAuthors", getAllAuthors)
authorRouter.put("/authors/updateAuthor", updateAuthor)
authorRouter.delete("/authors/deleteAuthor", deleteAuthor)

console.log("routes.js")
module.exports = authorRouter

