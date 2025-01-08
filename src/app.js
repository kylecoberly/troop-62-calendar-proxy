const express = require("express");
const { readFile } = require("fs/promises");

const { fetchIcal, patchIcal } = require("./patch");
const timezone = await readFile("./src/timezone.txt", "utf8");

const app = express();

app.get("/", (request, response) => {
  response.json({ a: "b" });
});

module.exports = app;
