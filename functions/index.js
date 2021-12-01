const functions = require("firebase-functions");
const express = require("express");
const app = express();

app.get("/ping", (_, res) => {
  res.send("Hello world!");
});

exports.app = functions.https.onRequest(app);