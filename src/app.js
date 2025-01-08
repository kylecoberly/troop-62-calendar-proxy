const express = require("express");
const { readFile } = require("fs/promises");

const patchIcal = require("./patch");

const app = express();

const CALENDAR_URL =
  "https://api.scouting.org/advancements/events/calendar/48837";

app.get("/", async (_, response) => {
  const sourceIcal = await fetch(CALENDAR_URL)
    .then((response) => response.text());
  const timezone = await readFile("./src/timezone.txt", "utf8");

  const patchedIcal = patchIcal(sourceIcal, timezone);

  response.status(200);
  response.set("Content-Type", "text/calendar");
  response.send(patchedIcal);
});

app.get((error, request, response, next) => {
  console.error(error.message);
  response.sendStatus(404);
});

module.exports = app;
