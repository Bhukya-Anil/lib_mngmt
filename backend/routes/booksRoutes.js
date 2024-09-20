const router = require("express").Router();
const bookModel = require("../models/booksModel");

router.post('/add', async (req, res) => {
    try {
        const newBook = new bookModel(req.body);
        await newBook.save().then(() => {
            res.status(200).json({ message: "Book Added Successfully" });
        });
    } catch (error) {
        console.log(error);
    }
});

router.get('/getBooks', async (req, res) => {
    let books;
    try {
        books = await bookModel.find();
        res.status(200).json({ books });
    } catch (error) {
        console.log(error);
    }
});

router.get("/getBooks/:id", async (req, res) => {
    let book;
    const id = req.params.id;
    try {
        book = await bookModel.findById(id);
        res.status(200).json({ book }); 
    } catch (error) {
        console.log(error);
    }
})

router.put("/updateBook/:id", async (req, res) => {
    const id = req.params.id;
    const { bookname, description, author, image, price } = req.body;
    let book;
    try {
        book = await bookModel.findByIdAndUpdate(id, {
          bookname,
          description,
          author,
          image,
          price,
        });
        await book
            .save()
            .then(() => res.json({message:"Data updated"}));
    } catch (error) {
        console.log(error);
    }
});

router.delete("/deleteBook/:id", async (req, res) => {
    const id = req.params.id;
    try {
        await bookModel.findByIdAndDelete(id).then(() => res.status(201).json({ message: "Deleted Successfully" }));
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;