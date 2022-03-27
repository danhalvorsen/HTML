import axios from "axios";
import { server } from "./server";

beforeAll(() => server.listen());
afterEach(() => {});
afterAll(() => server.close());

describe("CheckList", () => {
    it("CheckList/MC/Query", async () => {
      var request = await axios.get(
        "CheckList/MC?plantId=PCS$$100&checklistId=1",
        { headers: { "Content-Type": "application/json" } }
      );
      const response = request;
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty("loopTags");
      expect(response.data).toHaveProperty("checkList");
      expect(response.data).toHaveProperty("checkItems");
      expect(response.data).toHaveProperty("customCheckItems");
    });
  
    it("CheckList/PunchList/Query", async () => {
      const request = await axios.get(
        "CheckList/PunchList?plantId=PCS$$100&checklistId=1",
        { headers: { "Content-Type": "application/json" } }
      );
      const response = request;
      expect(response.status).toBe(200);
      expect(response.data.length).toBe(2);
      expect(response.data[0]).toHaveProperty('attachmentCount');
      expect(response.data[0]).toHaveProperty('status');
      expect(response.data[0]).toHaveProperty('callOffNo');
      expect(response.data[0]).toHaveProperty('cleared');
      expect(response.data[0]).toHaveProperty('description');
      expect(response.data[0]).toHaveProperty('id');
      expect(response.data[0]).toHaveProperty('rejected');
      expect(response.data[0]).toHaveProperty('responsibleCode');
      expect(response.data[0]).toHaveProperty('statusControlledBySwcr');
      expect(response.data[0]).toHaveProperty('systemModule');
      expect(response.data[0]).toHaveProperty('tagDescription');
      expect(response.data[0]).toHaveProperty('tagId');
      expect(response.data[0]).toHaveProperty('tagNo');
      expect(response.data[0]).toHaveProperty('verified');
    });
  });
