import axios from 'axios';
import { IWoPreview } from '../../mockRoutes/api.types';
import { server } from '../../mockRoutes/server';

describe('/Workorder', () => {

  beforeAll(() => server.listen())
  afterAll(() => server.close())

  // test/Login.test.js
  it('/Workorder/Query', async () => {
    const res = await axios.get<IWoPreview>('/WorkOrder?plantId=PCS$$2000&WorkOrderId=1000');
    expect(res.status).toBe(200);
    expect(res.data).toHaveProperty('id');
    expect(res.data).toHaveProperty('workOrderNo');
    expect(res.data).toHaveProperty('title');
    expect(res.data).toHaveProperty('description');
    expect(res.data).toHaveProperty('disciplineCode');
    expect(res.data).toHaveProperty('disciplineDescription');
  });

});