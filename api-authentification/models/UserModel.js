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
    name: {type: DataTypes.STRING,allowNull:false},
    mail: {type: DataTypes.STRING,allowNull:false},
    password: {type: DataTypes.STRING,allowNull:false},
  },
  {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
  }
);



Utilisateur.sync();

export default Utilisateur;
