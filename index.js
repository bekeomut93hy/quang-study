const dotenv = require("dotenv");
const express = require("express");
const app = express();
dotenv.config();
const userRoute = require("./routers/user.route");
const bookRoute = require("./routers/book.route");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/users", userRoute);
app.use("/books", bookRoute);
app.use(express.static("public"));



const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Mongo connected");
    app.listen(process.env.PORT, () =>
      console.log(`Server listen on port ${process.env.PORT}`)
    );
  })
  .catch((err) => {
    console.log(err);
  });
