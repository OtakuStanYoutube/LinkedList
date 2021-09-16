import { Connection } from "typeorm";

import app from "../app";
import request from "supertest";
import { createTestConn } from "./config/createTestConnection";

let conn: Connection;
beforeAll(async () => {
  conn = await createTestConn();
});
afterAll(async () => {
  conn.close();
});

describe("testing get endpoints", () => {
  it("should create a new post", async () => {
    const res = await request(app).get("/");

    expect(res.statusCode).toEqual(201);
    expect(res.headers["content-type"]).toEqual(
      expect.stringContaining("json"),
    );
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toBeDefined();
  });
});

describe("POST /api/v1/users/register", () => {
  describe("given an email and password", () => {
    test("should respond with a 201 status code", async () => {
      const res = await request(app).post("/api/v1/users/register").send({
        "username": "OtakuStan",
        "email": "test2@test.com",
        "password": "test1234"
      });

      expect(res.statusCode).toEqual(201);

      expect(res.headers["content-type"]).toEqual(
        expect.stringContaining("json"),
      );
    });
  });
});

describe("POST /api/v1/users/login", () => {
  describe("given an email and password", () => {
    test("should respond with a 201 status code", async () => {
      const res = await request(app).post("/api/v1/users/login").send({
        email: "test2@test.com",
        password: "test1234",
      });

      expect(res.statusCode).toEqual(201);

      expect(res.headers["content-type"]).toEqual(
        expect.stringContaining("json"),
      );

      expect(res.body).toHaveProperty("user");

      expect(res.body).toHaveProperty("accessToken");

      expect(res.body).toHaveProperty("newTokenId");

      expect(res.body.user).toBeDefined();
    });
  });
});
