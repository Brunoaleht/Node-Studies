import express from "express";
import exphbs from "express-handlebars";
import mysql from "mysql";

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

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/books/insertbook", (req, res) => {
  const title = req.body.title;
  const pages = req.body.pages;

  const sql = `INSERT INTO books (title, pages) VALUES ('${title}', '${pages}')`;
  conn.query(sql, (err) => {
    if(err){
      console.log(err)
    }

    res.redirect('/')
  })
});

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodemysql",
});

conn.connect((err) => {
  if (err) {
    console.log(err);
  }

  console.log("Connected MySQL!");

  app.listen(3000);
});
