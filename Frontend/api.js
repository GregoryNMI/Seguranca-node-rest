import express from "express";
const app = express();

app.listen()
const PORT = 3000;

app.use(express.static("public"));


app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`));