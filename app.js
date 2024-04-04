const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send('<h1 style="color: blue; font-size: 48px;">Node Application</h1>');
});

app.listen(8080, () => {
  console.log("App listening on port http://localhost:8080");
});
