const express = require("express");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.use(express.static(__dirname + "/public"));

let data = {
  name: "Ironhacker",
  lastName: "test lastname",
  address: {
    street: "Your heart",
    number: 87,
  },
  cities: [
    "Amsterdam",
    "Barcelona",
    "Berlin",
    "Lisbon",
    "Madrid",
    "Mexico City",
    "Miami",
    "Paris",
    "Sao Paulo",
  ],
};

app.get("/", (req, res) => {
  res.render("index", data);
});

app.listen(3000);
