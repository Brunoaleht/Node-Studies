const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

//config partials
const hbs = exphbs.create({
  partialsDir: ["views/partials"],
});

//setup do handlebars com command js
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static('public'))

app.get("/dashboard", (req, res) => {
  const items = ["item A", "item B", "item C"];
  res.render("dashboard", { items });
});

app.get("/post", (req, res) => {
  const post = {
    title: "Aprender NodeJs",
    category: "JavaScript",
    description: "É um curso de node",
    body: "É de suma importância aprender node js para sua carreira de dev",
    numberComment: 4,
  };
  res.render("blogpost", { post });
});

app.get("/blog", (req, res) => {
  const posts = [
    {
      title: "Aprender NodeJs",
      category: "JavaScript",
      body: "É de suma importância aprender node js para sua carreira de dev",
    },
    {
      title: "Aprender ReactJs",
      category: "JavaScript",
      body: "É de suma importância aprender node js para sua carreira de dev",
    },
    {
      title: "Aprender VueJs",
      category: "JavaScript",
      body: "É de suma importância aprender node js para sua carreira de dev",
    },
  ];
  res.render("blog", { posts });
});

app.get("/", (req, res) => {
  const user = {
    firstName: "Bruno",
    lastName: "Alexandre",
    age: 25,
  };

  const titulo2 = "Titulo teste";
  const auth = true;
  const approved = false;

  res.render("home", { user, titulo2, auth, approved });
});

app.listen(3000, () => {
  console.log("App Funcionando");
});
