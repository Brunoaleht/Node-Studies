import { Sequelize } from "sequelize";

const sequelize = new Sequelize("nodesequelize", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

// try {
//   sequelize.authenticate();
//   console.log("Conectado");
// } catch (error) {
//   console.log("Não foi possível conectar:" + error);
// }

export default sequelize;
