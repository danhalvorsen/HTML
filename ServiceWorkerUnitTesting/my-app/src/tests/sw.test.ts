// // const makeServiceWorkerEnv = require('service-worker-mock');
// // const makeFetchMock = require('service-worker-mock/fetch');
// import { jest } from "@jest/globals";
import "service-worker-mock";
import "service-worker-mock/fetch";

// const makeServiceWorkerEnv = require('service-worker-mock');
// const makeFetchMock = require("service-worker-mock/fetch");

const makeServiceWorkerEnv = require("service-worker-mock");

describe("Service worker", () => {
  beforeEach(() => {
    const serviceWorkerEnv = makeServiceWorkerEnv();

    Object.defineProperty(serviceWorkerEnv, "addEventListener", {
      value: serviceWorkerEnv.addEventListener,
      enumerable: true,
    });
    Object.assign(global, serviceWorkerEnv);
    jest.resetModules();
  });

  it("should add listeners", async () => {
    require("./sw");
    await self.trigger("install");
    // @ts-ignore
    expect(self.listeners.get("install")).toBeDefined();
    // @ts-ignore
    expect(self.listeners.get("activate")).toBeDefined();
    // @ts-ignore
    expect(self.listeners.get("fetch")).toBeDefined();
  });

  it("should delete old caches on activate", async () => {
    require("./sw");

    // Create old cache
    await self.caches.open("OLD_CACHE");
    expect(self.snapshot().caches.OLD_CACHE).toBeDefined();

    // Activate and verify old cache is removed
    await self.trigger("activate");
    expect(self.snapshot().caches.OLD_CACHE).toStrictEqual({});
  });

  it("should return a cached response", async () => {
   require("./sw");
   // @ts-ignore
   const cachedResponse : Response = { clone: () => { }, data: { key: 'value' } };
       
    const cachedRequest: Request = new Request('/test', {})

    const cache = await self.caches.open('TEST');
    cache.put(cachedRequest, cachedResponse);
  
    const response = await self.trigger('fetch', cachedRequest);
    // @ts-ignore
    expect(response.data.key).toEqual('value');
  });

  it('should ignore the requests to external world', async () => {
   const mockResponse = { clone: () => { return { data: { key: 'value' } } } };
   // @ts-ignore
   global.fetch = (response) => Promise.resolve({ ...mockResponse, headers: response.headers });
 
   require("./sw");
 
   const request = new Request('http://google.com');
   const response = await self.trigger('fetch', request);
   expect(response).not.toBeDefined();
 });

});
