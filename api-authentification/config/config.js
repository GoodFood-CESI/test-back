import {Sequelize}  from "sequelize";
import * as dotenv from "dotenv";
dotenv.config();

const db = new Sequelize(process.env.DB_DATABASE,
     process.env.DB_USER,
     process.env.DB_PASS,
    {
        host:process.env.DB_HOST,
        dialect:process.env.DB_DIALECT,
    });


export const testDbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default db;
