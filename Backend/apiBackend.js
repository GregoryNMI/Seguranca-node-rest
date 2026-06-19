import express from "express";
import dotenv from "dotenv";
import path from "path";
import {fileURLToPath} from "url";

import {conectarBanco} from "./database/connection.js";
import usuario from "./models/usuario.js";

dotenv.config();

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({extended: true}))



app.use(
    express.static(
        path.join(__dirname, "../frontend/public")
    )
);

conectarBanco();


app.get("/", (req, res) => {
    res.sendFile(
        path.join(
            __dirname,
            "../Frontend/public/index.html"
        )
    );
});


app.post("/salvar", async (req, res) => {
    try{
        const { nome, email, senha } = req.body;

        const usuario = new Usuario({
            nome,
            email,
            senha
        });

        await usuario.save();

        res.send("Usuário cadastrado com sucesso");
    } catch (erro) {
        console.log(erro);
        res.status(500).send("Erro ao cadastrar");
    }
});

console.log(
    path.join(__dirname, "../Frontend/public/index.html")
);


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});