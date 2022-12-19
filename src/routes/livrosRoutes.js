import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

router
    .get('/livros', LivroController.getBooks)
    .get('/livros/busca', LivroController.getBookByEdit)
    .get('/livros/:id', LivroController.getBookById)
    .post('/livros', LivroController.postBook)
    .put('/livros/:id', LivroController.putBook)
    .delete('/livros/:id', LivroController.deleteBook)

export default router;