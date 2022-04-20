const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

const port = process.env.PORT || 8000;

// const staticspath= path.join(__dirname,"../views")
// console.log(staticspath)
const changecspath = path.join(__dirname, "../server/components");
console.log(changecspath);

const partialspath = path.join(__dirname, "../server/layout");
console.log(partialspath);

app.set("view engine", "hbs");
app.set("views", changecspath);

hbs.registerPartials(partialspath);
app.get("/", (req, res) => {
  res.render("index.hbs", {
    name: "asim",
  });
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {
    status: "logout",
  });
});

app.get("/contacts", (req, res) => {
  res.render("contacts", {
    status: "logout",
  });
});

app.listen(port, () => {
  console.log("connections success");
});
