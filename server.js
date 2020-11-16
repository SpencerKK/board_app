const express = require("express");
const db = require("./db");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
dotenv.config({ path: "./.env" });

app.use("/api/users", require("./routes/userRoutes"));

db.sync({
    logging: console.log,
    // force: true,
  })
    .then(() => app.listen(process.env.PORT || 5000))
    .then(() => console.log("successfully connected to mysql"))
    .catch((err) => console.error(err));