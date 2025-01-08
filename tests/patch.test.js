import request from "supertest";
import { expect, test } from "vitest";
import { readFile } from "fs/promises";

import app from "../src/app";
import Patch from "../src/patch";

const { fetchIcal, patchIcal } = Patch;

test("Request works", async () => {
  const response = await request(app)
    .get("/")
    .expect(200)
    .expect("Content-Type", /json/);

  expect(response.body).toEqual({ a: "b" });
});

test("patches iCal files with the timezone", async () => {
  const source = await readFile("./samples/scouting-simple.ics", "utf8");
  const target = await readFile("./samples/patched-simple.ics", "utf8");
  const timezone = await readFile("./src/timezone.txt", "utf8");

  const patchedFile = patchIcal(source, timezone);

  expect(patchedFile).toEqual(target);
});
