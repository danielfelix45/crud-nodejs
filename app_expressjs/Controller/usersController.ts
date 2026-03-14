import { Request, Response } from "express";
import { IUsers } from "../Model/users";
import usersModel from "../Model/usersModel";

async function login(req: Request, res: Response, next: any) {
    res.render("login");
}

async function checkLogin(req: Request, res: Response, next: any) {
    
    const login = req.body as IUsers;

    try {
        let logado = await usersModel.findOne({
        where: {
            user: login.user,
            password: login.password
        }
        });

        if (logado != null) {
            res.redirect('/clients')
        } else {
            // console.log('Senha inválida!')
            throw new Error("Senha inválida!!!")
        }
    } catch (error) {
        console.log(error);
        res.status(500).end();
    }
    
}

export default {login, checkLogin};