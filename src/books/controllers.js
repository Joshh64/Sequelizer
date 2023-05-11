const Book = require("./model")

const addBook = async (req, res) => {
    try {
        const newBook = await Book.create ({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre
        }) // adds new book to database
        
        res.status(201).json ({
            message: "Book successfully created!",
            book: newBook
        })
    } catch (error) {
        console.log(error)
    }
}

const getAllBooks = async (req, res) => {
    try {
        const findBooks = await Book.findAll() // locates book user wanted to find
        
        res.status(200).json ({
            message: "Books successfully found!",
            book: findBooks
        })
    } catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error });
        console.log(error)
    }
}

const updateBook = async (req, res) => {
    try {
        const update = await Book.update({
            author: req.body.newAuthor
        }, // update author
        {
            where: {
                title: req.body.title
            }
        }) // update author where the title is equal to the title passed in the request body

        res.status(200).json ({
            message: "Book successfully updated!",
            updateResult: update
        })
    } catch {
        res.status(501).json({ errorMessage: error.message, error: error });
        console.log(error)
    }
}

const deleteBook = async (req, res) => {
    try {
        const { title, deleteAll } = req.body;

        if (deleteAll) {
            await Book.destroy({
                where: {},
                truncate: true
            }); // delete all books from the table

            res.status(200).json({
                message: "All books successfully deleted!",
            });
        } else {
            const deleteBook = await Book.destroy({
                where: {
                    title: title
                }
            }); // delete book where the title is equal to the title passed in the request body

            if (deleteBook === 0) {
                res.status(404).json({
                    message: "Book not found!",
                });
            } else {
                res.status(200).json({
                    message: "Book successfully deleted!",
                    book: deleteBook
                });
            }
        }
    } catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error });
        console.log(error)
    }
}

module.exports = {
    addBook,
    getAllBooks,
    updateBook,
    deleteBook
}