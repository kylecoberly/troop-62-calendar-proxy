import request from "supertest";
import { expect, test } from "vitest";
import app from "../src/app";

test("Request works", async () => {
  const response = await request(app)
    .get("/")
    .expect(200)
    .expect("Content-Type", /json/);

  expect(response.body).toEqual({ a: "b" });
});
