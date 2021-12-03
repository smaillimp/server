const express = require("express");
const fs = require("fs/promises");
const app = express();
const port = process.env.PORT || 1234;

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/another-page", (req, res) => {
  res.sendFile(__dirname + "/another-page.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
