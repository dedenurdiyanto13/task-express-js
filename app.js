const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // ---respon berupa text
  // res.send("Halaman Home");
  // ---respon berupa json
  // res.json({
  //   nama: "Dede Nurdiyanto",
  //   alamat: "Majalengka",
  //   status: "Aktif",
  // });
  res.sendFile("./index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  // res.send("Halaman About");
  res.sendFile("./about.html", { root: __dirname });
});

app.get("/contact", (req, res) => {
  // res.send("Halaman Contact");
  res.sendFile("./contact.html", { root: __dirname });
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Server http://localhost:${port}`);
});
