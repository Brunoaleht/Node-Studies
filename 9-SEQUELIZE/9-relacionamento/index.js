import express from "express";
import exphbs from "express-handlebars";
import sequelize from "./db/conn.js";

import User from "./models/User.js";
import Address from "./models/Address.js";

const conn = sequelize;

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/users/create", (req, res) => {
  res.render("addUser");
});
app.post("/users/create", async (req, res) => {
  const name = req.body.name;
  const occupation = req.body.occupation;
  let newsLetter = req.body.newsLetter;

  if (newsLetter === "on") {
    newsLetter = true;
  } else {
    newsLetter = false;
  }

  await User.create({ name, occupation, newsLetter });
  res.redirect("/");
});

app.get("/users/:id", async (req, res) => {
  const id = req.params.id;

  const user = await User.findOne({ raw: true, where: { id: id } });

  res.render("userView", { user });
});

app.post("/users/delete/:id", async (req, res) => {
  const id = req.params.id;
  await User.destroy({ where: { id: id } });

  res.redirect("/");
});

app.get("/users/edit/:id", async (req, res) => {
  const id = req.params.id;
  const user = await User.findOne({ raw: true, where: { id: id } });

  res.render("userEdit", { user });
});

app.post("/users/update", async (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const occupation = req.body.occupation;
  let newsLetter = req.body.newsLetter;

  if (newsLetter === "on") {
    newsLetter = true;
  } else {
    newsLetter = false;
  }

  const userData = {
    id,
    name,
    occupation,
    newsLetter,
  };

  await User.update(userData, { where: { id: id } });
  res.redirect("/");
});

app.get("/", async (req, res) => {
  const users = await User.findAll({ raw: true }); //o raw igual a true serve para na chamada do findAll, vir dados mais limpos, como apenas um array de dados q precisamos
  res.render("home", { users: users });
});

conn
  .sync()
  //.sync({ force: true })
  .then(() => app.listen(3000))
  .catch((err) => console.log(err));
