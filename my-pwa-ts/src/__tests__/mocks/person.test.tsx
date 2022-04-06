import axios from 'axios';
import { server } from '../../mockRoutes/server';

describe('API/Person/', () => {

  beforeAll(() => server.listen())
  afterAll(() => server.close())

  it('API/Person/12', async () => {

    const res = await axios.get('api/person/12', { headers: { 'Content-Type': 'application/json' } });
    expect(res.status).toBe(200);
    expect(res.data).toHaveProperty('id');
    expect(res.data).toHaveProperty('lastName');
    expect(res.data).toHaveProperty('firstName');
    expect(res.data).toHaveProperty('azureOid');
    expect(res.data).toHaveProperty('email');
    expect(res.data).toHaveProperty('username');
  });

});



