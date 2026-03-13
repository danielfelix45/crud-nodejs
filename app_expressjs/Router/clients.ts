import { Router } from "express";
import clientsController from "../Controller/clientsController";

const router = Router();

// Aqui vamos configurar as rotas da nossa aplicação.
router.get("/", clientsController.index);

router.get("/sobrenos", clientsController.sobreNos);

router.get("/contatos", clientsController.contatos);

router.get("/trabalheconosco", clientsController.trabalheConosco);

router.get("/conteudotecnologia", clientsController.conteudoTecnologia);

export default router;