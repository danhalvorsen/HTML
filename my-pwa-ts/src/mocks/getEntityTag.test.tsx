import axios from 'axios';
import { TagPreview } from './api.types';
import { server } from './server';

describe('/Tag', () => {

  beforeAll(() => server.listen())
  afterAll(() => server.close())

  // test/Login.test.js
  it('/Tag/Query ', async () => {
    const res = await axios.get<TagPreview>('/Tag?plantId=PCS$$2000&tagId=1000');
    expect(res.status).toBe(200);
    expect(res.data).toHaveProperty('id');
    expect(res.data).toHaveProperty('tagNo');
    expect(res.data).toHaveProperty('description');
    expect(res.data).toHaveProperty('tagFunctionCode');
    expect(res.data).toHaveProperty('commPkgNo');
    expect(res.data).toHaveProperty('mcPkgNo');
    expect(res.data).toHaveProperty('callOffNo');
    expect(res.data).toHaveProperty('punchaseOrderTitle');
    expect(res.data).toHaveProperty('mccrResponsibleCode');
  });
});
