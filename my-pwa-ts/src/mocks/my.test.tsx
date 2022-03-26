import { render, screen } from '@testing-library/react';
import axios from 'axios';
import { server } from './server';
import {AxiosRequestHeaders} from 'axios'
beforeAll(() => server.listen())
afterAll(() => server.close())

// test/Login.test.js
test('get Person data by id', async () => {
  try {
    var request = await axios.get('api/person/12', {headers: {'Content-Type': 'application/json'}});
    const header : AxiosRequestHeaders = request.headers; 
  

    const response = request;
    console.log(response.status);
    expect(response.status).toBe(200);
    expect(response.data).toStrictEqual({id: '12' });
  }
  catch (err) { console.log(err); }
 

});