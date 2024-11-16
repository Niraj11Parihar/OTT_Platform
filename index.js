const express = require("express");
require("./config/database");
const path = require('path')
const router = require("./routes/routes");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", router);

app.listen(4186, (error) => {
  if (!error) {
    console.log("express connected at http://localhost:4186");
    return true;
  } else {
    {
      console.log("express not connected at http://localhost:4186");
      return false;
    }
  }
});
