import { Sequelize } from "sequelize";

const conn = new Sequelize("nodemvc", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

try {
  conn.authenticate();
  console.log("Conectado com sucesso");
} catch (error) {
  console.log(`Não foi possível conectar: ${error}`);
}

export default conn;
