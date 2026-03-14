import { Request, Response } from "express";
import { IClients } from "../Model/clients";
import clientsModel from "../Model/clientsModel";

async function index(req: Request, res: Response, next: any) {
    // res.render("index");
    const clients = await clientsModel.findAll();
    res.json(clients);
}

async function show(req: Request, res: Response, next: any) {
    const id = Number(req.params.id as string);
    const client = await clientsModel.findByPk(id);
    
    res.json(client);
}

function create(req: Request, res: Response, next: any) {
    res.render('create')
}

async function store(req: Request, res: Response, next: any) {
    let client = req.body as IClients;

    await clientsModel.create({...client});
    res.redirect("/");
}

async function edit(req: Request, res: Response, next: any) {
    const client = await clientsModel.findByPk(req.params.id as string);
    
    res.render('edit', { client: client });
}

async function update(req: Request, res: Response, next: any) {
    await clientsModel.update(
        req.body as IClients, {
            where: {
                id: req.params.id as string
     
            }
        }
    );  
    res.redirect("/");
}

async function del(req: Request, res: Response, next: any) {
    await clientsModel.destroy({
        where: {
            id: req.params.id as string
        }
    });
    res.redirect("/");
}

// Funçoes criadas nas aulas de rotas e MVC e tbm como mão na massa.
// function sobreNos(req: Request, res: Response, next: any) {
//     res.render("sobre-nos");
// }

// function trabalheConosco(req: Request, res: Response, next: any) {
//     res.render("trabalhe-conosco");
// }

// function conteudoTecnologia(req: Request, res: Response, next: any) {
//     res.render("conteudo-tecnologia");
// }

// function contatos(req: Request, res: Response, next: any) {
//     res.render("contatos");
// }

export default {index, create, store, show, edit, update, del /*, sobreNos, trabalheConosco, conteudoTecnologia, contatos*/};