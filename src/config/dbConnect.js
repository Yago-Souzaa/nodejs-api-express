import mongoose from "mongoose";

mongoose.connect("mongodb+srv://yago:pwyago666@cluster0.r5x8bew.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;