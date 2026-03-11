import { Request, Response } from "express";

function index(req: Request, res: Response, next: any) {
    res.render("index");
}

function sobreNos(req: Request, res: Response, next: any) {
    res.render("sobrenos");
}

function contatos(req: Request, res: Response, next: any) {
    res.render("contatos");
}

export default {index, sobreNos, contatos};