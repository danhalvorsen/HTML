import { jest } from "@jest/globals";
import { Database } from "./database";
import axios from "axios";
import { Person } from "../mocks/api.types";


describe("Insert data into database", () => {
  beforeAll(async () => {
    var database = new Database();
    try {
      await database.CreateDatabase();
    } catch (error) {
      console.log("error creating database");
    }
  })

  it("should insert data into database", async () => {
    const res : Response = await axios.get("api/person/12", {
      headers: { "Content-Type": "application/json" },
    });

    expect(res.status).toBe(200);

    
  });
});
