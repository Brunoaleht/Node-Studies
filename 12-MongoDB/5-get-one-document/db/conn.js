const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017/testmongodb";

const client = new MongoClient(uri);


const run = async () => {
  try {
    await client.connect();
    console.log("conectando com mongodb");
  } catch (error) {
    console.log(error);
  }
};
run();

module.exports = client;
