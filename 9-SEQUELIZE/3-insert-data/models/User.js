import { DataTypes } from "sequelize";

import sequelize from "../db/conn.js";
const db = sequelize;

const User = db.define("user", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  occupation: {
    type: DataTypes.STRING,
    required: true,
  },
  newsLetter: {
    type: DataTypes.BOOLEAN,
  },
});

export default User;
