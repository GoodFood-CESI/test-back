import express, { Router } from "express";
import cors from 'cors'
import db from "./config/config.js"
import router from "./routes/route.js";

// Init express
const app = express();
// use express json
app.use(express.json());
// use cors
app.use(cors());

app.use(router);
// Testing database connection
//  try {
//    db.authenticate();
//    console.log("Connection has been established successfully.");
//  } catch (error) {
//    console.error("Unable to connect to the database:", error);
//  }


const port = 4000;
// listen on port
app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
