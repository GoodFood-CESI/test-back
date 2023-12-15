import {Sequelize}  from "sequelize";
import * as dotenv from "dotenv";
dotenv.config();

const db = new Sequelize('postgres://postgres:info@localhost:5432/Authentification') // Example for postgres


export default db;
