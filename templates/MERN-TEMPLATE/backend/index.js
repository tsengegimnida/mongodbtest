const express = require("express");
const mongoose = require("mongoose");
const { allowedNodeEnvironmentFlags } = require("process");
const dotenv = require("dotenv").config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3010

app.listen(PORT, ()=> console.log("----Server connected----"))