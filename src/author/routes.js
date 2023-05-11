const { Router } = require("express") // import router library from express
const authorRouter = Router() // defines our Router
const { addAuthor, getAllAuthors, updateAuthor, deleteAuthor } = require("./controllers")

authorRouter.post("/authors/addAuthor", addAuthor)
authorRouter.get("/authors/getAllAuthors", getAllAuthors)
authorRouter.put("/authors/updateAuthor", updateAuthor)
authorRouter.delete("/authors/deleteAuthor", deleteAuthor)

module.exports = authorRouter
