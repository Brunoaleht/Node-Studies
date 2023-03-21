import express from "express";
import exphbs from "express-handlebars";
import sequelize from "./db/conn.js";

import User from "./models/User.js";

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
    newsLetter = false
  }
  console.log(req.body)
  await User.create({ name, occupation, newsLetter });
  res.redirect("/");
});

app.get("/", (req, res) => {
  res.render("home");
});

conn
  .sync()
  .then(() => app.listen(3000))
  .catch((err) => console.log(err));
