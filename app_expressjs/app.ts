import express from "express";
import clientsRouter from "./Router/clients";
import db from "./db";

const app = express();
app.use(clientsRouter);

// Aqui informar que estou usando o pug como template engine.
app.set("view engine", "pug");  
// Aqui informar onde as views estão localizadas.
app.set("views", "./views");

// Aqui configuração do banco de dados.
db.sync().then(() => {
    console.log("Conectado com o banco: " + process.env.DB_NAME);
}).then(() => {
    app.listen(process.env.PORT, () => {
    console.log("Servidor criado...");
    });
});

