import dotenv from "dotenv";
import express from "express";
dotenv.config();
import roteadorUsuario from "./routes/usuario.js";
import roteadorLogin from "./routes/login.js";


const app = express();
const port = 3000;

//src/index.js


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(roteadorUsuario);
app.use(roteadorLogin);

app.get("/", (req, res) => {
  res.json({
    message: "API para CRUD usuario: link_gitgub",
  });
});

app.listen(port, () => {
  // Um socket para "escutar" as requisições
  console.log(`Serviço escutando na porta:  ${port}`);
});