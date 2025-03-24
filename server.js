import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./config/database.js";
import noteRoutes from "./routes/noteRoutes.js";
import todoRoutes from "./routes/todoRoutes.js";
import bodyParser from "body-parser";


dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/api/notes", noteRoutes);
app.use("/api/todos", todoRoutes);

const connectDB = async ()=>{
  try{
    await db.authenticate();
    console.log("Database connected...");

    await db.sync();
    console.log("Database synchronized...");
  }catch(error){
    console.error("Connection error: ", error);
    process.exit(1);
  }
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

connectDB();
