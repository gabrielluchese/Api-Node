import mongoose from "mongoose"

mongoose.connect("mongodb+srv://gabrielluchese:gabriel19@api.lvn1o68.mongodb.net/?retryWrites=true&w=majority");

let db = mongoose.connection;

export default db;
