const Author = require('./model');

const addAuthor = async (req, res) => {
  try {
    const newAuthor = await Author.create({
      name: req.body.name,
      publisher: req.body.publisher
    })

    res.status(201).json({
      message: 'Author successfully created!',
      author: newAuthor
    })
  } catch (error) {
    console.log(error)
  }
}

const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.findAll()

    res.status(200).json({
      message: 'Authors successfully found!',
      authors: authors
    })
  } catch (error) {
    console.log(error)
  }
}

const updateAuthor = async (req, res) => {
  console.log(req.body.name)
  try {
    const author = await Author.update({
        publisher: req.body.newPublisher
    }, 
    {
        where: {
          name: req.body.name
      }
    })
    console.log(author)

    if (author != 1) {
      res.status(404).json({
        message: 'Author not found/updated!'
      })
      return
    }

    res.status(200).json({
      message: 'Author successfully updated!',
      author: author
    })
  } catch (error) {
    console.log(error)
  }
}

const deleteAuthor = async (req, res) => {
  try {
    console.log(req.body.name)
    const author = await Author.findOne({
      where: {
        name: req.body.name
      }
    })

    if (!author) {
      res.status(404).json({
        message: 'Author not found!'
      })
      return
    }

    await author.destroy()

    res.status(200).json({
      message: 'Author successfully deleted!',
      author: author
    })
  } catch (error) {
    console.log(error)
  }
}

const deleteAllAuthors = async (req, res) => {
  try {
    await Author.destroy({
      where: {},
      truncate: true
    })

    res.status(200).json({
      message: 'All authors successfully deleted!'
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  addAuthor,
  getAllAuthors,
  updateAuthor,
  deleteAuthor,
  deleteAllAuthors
}