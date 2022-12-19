import express from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router();

router
    .get('/autores', AutorController.getAutor)
    .get('/autores/:id', AutorController.getAutorById)
    .post('/autores', AutorController.postAutor)
    .put('/autores/:id', AutorController.putAutor)
    .delete('/autores/:id', AutorController.deleteAutor)

export default router;