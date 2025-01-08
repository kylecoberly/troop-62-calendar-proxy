const express = require("express");
const { readFileSync } = require("fs");

const patchIcal = require("./patch");
const timezone = readFileSync("./src/timezones/denver.txt", "utf8");
const CALENDAR_URL =
  "https://api.scouting.org/advancements/events/calendar/48837";

const app = express();

app.get("/", async (_, response) => {
  const sourceIcal = await fetch(CALENDAR_URL)
    .then((response) => response.text());

  const patchedIcal = patchIcal(sourceIcal, timezone);

  response
    .status(200)
    .set("Content-Type", "text/calendar")
    .send(patchedIcal);
});

app.get((error, request, response, next) => {
  console.error(error.message);
  response.sendStatus(404);
});

module.exports = app;
