import { RouteHandler, RouteHandlerCallbackOptions, RouteMatchCallbackOptions } from 'workbox-core';

export const matchFunction =  ({url, request, event } : RouteMatchCallbackOptions ) => {
    
    if(url.origin === self.location.origin)
    {
      if(url.href === 'https://api/persons/12')
          return {
            hashCode: hashCode(url.href),
            test: 'testing'
          };
    }
  };

  export const handler : RouteHandler = async ({request, url, event, params } : RouteHandlerCallbackOptions) => {
    return new Response(
      'Testing'
    );   
     
  };

  function hashCode(str: string): number {
    var h: number = 0;
    for (var i = 0; i < str.length; i++) {
        h = 31 * h + str.charCodeAt(i);
    }
    return h & 0xFFFFFFFF
}