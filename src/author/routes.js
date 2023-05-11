const { Router } = require("express") // import router library from express
const authorRouter = Router() // defines our Router
const { addAuthor, allAuthors, updateAuthor, deleteAuthor } = require("./controllers")

authorRouter.post("/authors/addAuthor", addAuthor)
authorRouter.get("/authors/allAuthors", allAuthors)
authorRouter.put("/authors/updateAuthor", updateAuthor)
authorRouter.delete("/authors/deleteAuthor", deleteAuthor)

module.exports = authorRouter
