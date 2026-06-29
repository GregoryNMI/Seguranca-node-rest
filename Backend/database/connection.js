import dns from "dns";
import mongoose from "mongoose";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

export async function conectarBanco() {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            serverSelectionTimeoutMS: 10000
        });

        console.log("MongoDB conectado");
    } catch (erro) {
        console.error("Erro ao conectar MongoDB:", erro.message);
    }
}