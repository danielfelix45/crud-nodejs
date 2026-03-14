import express from "express";
import clientsRouter from "./Router/clients";
import usersRouter from "./Router/users";
import db from "./db";

const app = express();

// Cria a comunicação entre o formulário e o Model
app.use(express.urlencoded({ extended: true }));

app.use(clientsRouter);
app.use(usersRouter)

// Aqui informar que estou usando o pug como template engine.
app.set("view engine", "pug");  
// Aqui informar onde as views estão localizadas.
app.set("views", "./Views");

// Aqui configuração do banco de dados.
db.sync().then(() => {
    console.log("Conectado com o banco: " + process.env.DB_NAME);
}).then(() => {
    app.listen(process.env.PORT, () => {
    console.log("Servidor rodando em http://localhost:3000");
    });
});

