import mongoose from "mongoose";


const conn = () => mongoose.connect(process.env.DB_URI);

export default conn;
