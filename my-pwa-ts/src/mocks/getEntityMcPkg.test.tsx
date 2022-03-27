import axios from 'axios';
import { McPkgPreview, TagPreview } from './api.types';
import { server } from './server';

describe('McPkg test suite', () => {

  beforeAll(() => server.listen())
  afterAll(() => server.close())

  // test/Login.test.js
  it('get McPkg package', async () => {
    var request = await axios.get<McPkgPreview>('/McPkg?plantId=PCS$$2000&mcPkgId=1000');
    const response = request;
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id');
    expect(response.data).toHaveProperty('mcPkgNo');
    // expect(response.data).toHaveProperty('description');
    // expect(response.data).toHaveProperty('status');
    // expect(response.data).toHaveProperty('commPkgNo');
    // expect(response.data).toHaveProperty('phaseCode');
    // expect(response.data).toHaveProperty('phaseDescription');
    // expect(response.data).toHaveProperty('responsibleCode');
    // expect(response.data).toHaveProperty('responsibleDescription');
    // expect(response.data).toHaveProperty('commissioningHandoverStatus');
    // expect(response.data).toHaveProperty('operationHandoverStatus');
  });
})
