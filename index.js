const express = require("express");
const path = require("path");
const app = express();
const user = require("./API/user");
require("dotenv").config();

const port = process.env.PORT || 3000;

app.use("/api/user", user);

app.use(express.static(path.join(__dirname, "reactapp/build")));

app.get("/", (req, res) => {
  res.sendFile("index.html", {
    root: path.join(__dirname, "./reactapp/build"),
  });
});

app.get("*", (req, res) => {
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
