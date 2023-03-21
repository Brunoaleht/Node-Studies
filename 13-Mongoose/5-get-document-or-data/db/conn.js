const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/testmongodb";

const main = async () => {
  await mongoose.connect(uri);
  console.log("conectando o Mongodb com o mongoose");
};
main().catch((err) => console.log(err));

module.exports = mongoose;
