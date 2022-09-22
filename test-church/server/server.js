require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
var corsOptions = {
  origin: "http://localhost:8081",
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.on("error", (error) => console.error(error));
connection.once("open", () => {
  console.log("Connected to Database");
//   initial();
});


const db = require("./models");
require("./routes/member.route")(app)

app.listen(3001, () => console.log("Server Started"));
