import express from "express";
import AutoresController from "../controllers/autoresControllers.js";

const routes = express.Router();

routes
  .get("/autores", AutoresController.listarAutores)
  .get("/autores/:id", AutoresController.listarAutorPorId)
  .post("/autores", AutoresController.cadastrarAutor)
  .put("/autores/:id", AutoresController.atualizarAutor)
  .delete("/autores/:id", AutoresController.excluirAutor)
  
export default routes;