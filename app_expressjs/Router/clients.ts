import { Router } from "express";
import clientsController from "../Controller/clientsController";

const router = Router();

// Aqui vamos configurar as rotas da nossa aplicação.
router.get("/clients/", clientsController.index);

// Cria a rota da view de criação de clientes
router.get("/clients/create", clientsController.create);
// Cria a rota para salvar os dados do cliente no banco de dados
router.post("/clients/create", clientsController.store);

router.get("/clients/edit/:id", clientsController.edit);
router.post("/clients/edit/:id", clientsController.update);

router.get("/clients/del/:id", clientsController.del);

router.get('/clients/:id', clientsController.show);

// Rotas criadas nas aulas de rotas e MVC e tbm como mão na massa.
// router.get("/contatos", clientsController.contatos);

// router.get("/trabalhe-conosco", clientsController.trabalheConosco);

// router.get("/conteudo-tecnologia", clientsController.conteudoTecnologia);

export default router;