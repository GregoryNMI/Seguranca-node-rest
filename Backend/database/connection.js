import mongoose from "mongoose";

export async function conectarBanco(){
    try{
        await mongoose.connect(process.env.MONGO_URL);

        console.log("MongoDB conectado");
    } catch (erro) {
        console.error("Erro:". erro);
    }

}