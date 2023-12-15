import { Sequelize } from "sequelize";

import db from "../config/config.js";

const { DataTypes } = Sequelize;

const Utilisateur = db.define(
  "Utilisateurs",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    mail: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
  }
);


export default Utilisateur;
