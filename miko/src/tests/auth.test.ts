import app from "../app";
import request from "supertest";
import { connectDB } from "../config/db";

describe("Post Endpoints", () => {
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

describe("POST /api/v1/users/login", () => {
  connectDB();
  describe("given an email and password", () => {
    test("should respond with a 201 status code", async () => {
      const res = await request(app).post("/api/v1/users/login").send({
        email: "test@test.com",
        password: "test1234",
      });

      expect(res.statusCode).toEqual(201);
    });

    test("should return a json response", async () => {
      const res = await request(app).post("/api/v1/users/login").send({
        email: "test@test.com",
        password: "test1234",
      });

      expect(res.headers["content-type"]).toEqual(
        expect.stringContaining("json"),
      );
    });

    test("response should have a user id", async () => {
      const res = await request(app).post("/api/v1/users/login").send({
        email: "test@test.com",
        password: "test1234",
      });

      expect(res.body).toHaveProperty("id");
    });

    test("response should have a defined user id", async () => {
      const res = await request(app).post("/api/v1/users/login").send({
        email: "test@test.com",
        password: "test1234",
      });

      expect(res.body.id).toBeDefined();
    });
  });
});
