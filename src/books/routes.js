const { Router } = require("express") // import router library from express
const bookRouter = Router() // defines our Router
const { addBook, getAllBooks, updateBook, deleteBook } = require("./controllers")

bookRouter.post("/books/addBook", addBook)
bookRouter.get("/books/getAllBooks", getAllBooks)
bookRouter.put("/books/updateBook", updateBook)
bookRouter.delete("/books/deleteBook", deleteBook)

module.exports = bookRouter
