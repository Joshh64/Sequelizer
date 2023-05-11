const Author = require("./model")

const addAuthor = async (req, res) => {
    try {
        const newAuthor = await Author.create ({
            name: req.body.name,
            publisher: req.body.publisher
        })
        
        res.status(201).json ({
            message: "Author successfully created!",
            book: newAuthor
        })
    } catch (error) {
        console.log(error)
    }
}

const allAuthors = async (req, res) => {
    try {
        const findAuthors = await Author.findAll() // locates book user wanted to find
        
        res.status(200).json ({
            message: "Authors successfully found!",
            book: findAuthors
        })
    } catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error });
        console.log(error)
    }
}

const updateAuthor = async (req, res) => {
    try {
        const update = await Author.update({
            author: req.body.newAuthor
        },
        {
            where: {
                title: req.body.title
            }
        })

        res.status(200).json ({
            message: "Book successfully updated!",
            updateResult: update
        })
    } catch {
        res.status(501).json({ errorMessage: error.message, error: error });
        console.log(error)
    }
}

const deleteAuthor = async (req, res) => {
    try {
        const deleteAuthor = await Author.destroy({
            where: {
                name: req.body.name
            }
        })

        res.status(200).json ({
            message: "Book successfully deleted!",
            book: deleteBook
        })
    } catch {
        res.status(501).json({ errorMessage: error.message, error: error });
        console.log(error)
    }
}

module.exports = {
    addAuthor,
    allAuthors,
    updateAuthor,
    deleteAuthor
}