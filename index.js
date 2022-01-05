//---------------------------- require statements--------------------
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const uuid = require("uuid");
const openapi = require("@wesleytodd/openapi");
const _ = require("lodash");
const mongoose = require("mongoose");
var sha256 = require("js-sha256");
//----------------------- import mongoose models--------------------
const db = require("./models");

//-------server config-----------------------------------------------
const PORT = 8080;
const app = express();

app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(cors());

//----------------------------connect to mongoose---------------------

//----------------------------app listening---------------------------
app.listen(PORT, () => {
  console.log(`Cloud listening on ${PORT}`);
});
