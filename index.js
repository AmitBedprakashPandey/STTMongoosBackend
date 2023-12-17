require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
const cors = require("cors");
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
  const CatagoryRoute = require("./Routes/CatagoryRoute");
  const CityRoute = require("./Routes/CityRoute");
  const CompanyDetailRoute = require("./Routes/CompanyDetailRoute");
  const CustomerEntryRoute = require("./Routes/CustomerEntryRoute");
  const CustomerRoute = require("./Routes/CustomerRoute");
  const FinancialYearRoute = require("./Routes/FinancialYearRoute");
  const ProcessRoute = require("./Routes/ProcessRoute");
  const StateRoute = require("./Routes/StateRoute");
  const SupplierRoute = require("./Routes/SupplierRoute");
  const TransportModel = require("./Routes/TransportModel");
  const UserRoute = require("./Routes/UserRoute");

  app.use("/api/catagory", CatagoryRoute);
  app.use("/api/city", CityRoute);
app.use("/api/company", CompanyDetailRoute);
app.use("/api/customerentry", CustomerEntryRoute);
app.use("/api/customer", CustomerRoute);
app.use("/api/financialyear", FinancialYearRoute);
app.use("/api/process", ProcessRoute);
app.use("/api/state", StateRoute);
app.use("/api/supplier", SupplierRoute);
app.use("/api/transport", TransportModel);
app.use("/api/user", UserRoute);

app.listen(port, () => {
  console.log(`${port} Server started...`);
});
