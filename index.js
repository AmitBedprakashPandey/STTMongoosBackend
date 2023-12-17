require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
const cors=require('cors');
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// parse requests of content-type - application/json 
app.use(bodyParser.json());

const mongoUrl = process.env.DB_URL;
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));


  const CityRoute = require("./Routes/CityRoute");



  app.use("/api/city", CityRoute);



app.listen(port, () => {
  console.log(`${port} Server started...`);
});
