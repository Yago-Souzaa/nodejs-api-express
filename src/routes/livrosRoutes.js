import express from "express";
import LivrosController from "../controllers/livrosControllers.js";

const routes = express.Router();

routes
  .get("/livros", LivrosController.listarLivros)
  .get("/livros/:id", LivrosController.listarLivroPorId)
  .post("/livros", LivrosController.cadastrarLivro)
  .put("/livros/:id", LivrosController.atualizarLivro)
  .delete("/livro/:id", LivrosController.excluirLivro)
export default routes;