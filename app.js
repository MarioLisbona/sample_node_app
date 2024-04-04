const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send('<h1 style="color: blue; font-size: 48px;">Node Application</h1>');
  res.send('<h1 style="color: red; font-size: 24px;">Coda Marie Art</h1>');
});

app.listen(3000, () => {
  console.log("App listening on port http://localhost:3000");
});
