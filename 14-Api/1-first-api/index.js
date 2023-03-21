import express from "express";
import testRoutes from "./routes/testRoute.js";



const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use('/', testRoutes)


app.listen(3000);
