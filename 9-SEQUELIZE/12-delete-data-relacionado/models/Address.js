import { DataTypes } from "sequelize";

import sequelize from "../db/conn.js";
import User from "./User.js";
const db = sequelize;

const Address = db.define("Address", {
  street: {
    type: DataTypes.STRING,
    required: true,
  },
  number: {
    type: DataTypes.STRING,
    required: true,
  },
  city: {
    type: DataTypes.STRING,
    required: true,
  },
});

User.hasMany(Address)
Address.belongsTo(User)//belongsTo é pertencer, isso é q o Address tenho uma coluna UserId, q faz referencia a um id do usuário

export default Address;
