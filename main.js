const express = require("express");
const mex = require("mustache-express");
const data = require('./data.js');
const app = express();

app.engine("mustache", mex());

app.set("views", "./views");
app.set("view engine", "mustache");
app.use(express.static("public"));

app.get("/", function (req , res) {
  res.render("index",data);

})



app.listen(3000, function () {
  console.log("Fuck you Brice");
})
