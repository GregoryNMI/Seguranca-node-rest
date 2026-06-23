import mongoose from "mongoose";
const usuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },


    telefone: {
        type: String,
        required: false,
        unique: false
    },

    email: {
        type: String,
        required: true,
    },

    enderecoweb: {
        type: String,
        required: false,
    },

    experiencia: {
        type: String,
        required: true,
    },


   
});


export default mongoose.model("usuario", usuarioSchema);