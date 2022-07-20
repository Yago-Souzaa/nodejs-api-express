import mongoose from "mongoose";

const autoShema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        nacionalidade: {type: String}        
    },
    {
        versionKey: false
    }
);

const autores = mongoose.model("autores", autoShema);

export default autores;