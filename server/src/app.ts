const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const server = express();
server.use(cors());
server.use(express.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(morgan("dev"));

module.exports = server;
