import { Request, Response } from "express";

function index(req: Request, res: Response, next: any) {
    res.render("index");
}

function sobreNos(req: Request, res: Response, next: any) {
    res.render("sobre-nos");
}

function trabalheConosco(req: Request, res: Response, next: any) {
    res.render("trabalhe-conosco");
}

function conteudoTecnologia(req: Request, res: Response, next: any) {
    res.render("conteudo-tecnologia");
}

function contatos(req: Request, res: Response, next: any) {
    res.render("contatos");
}

export default {index, sobreNos, trabalheConosco, conteudoTecnologia, contatos};