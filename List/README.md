#How to compile
tsc 
tsc -b .\tsconfig.json 

The 'tsc' is enough to compile the solution

# Why 
- Learn more about eventListeners and Typescript 
- How to add a EventListener on a list item i HTML and magnify the visual experience when paging up or down in the list

# Typescript way of handling events
https://cgjennings.ca/articles/typescript-events/

https://43081j.com/2020/11/typed-events-in-typescript

# Learn more about tsconfig.json and
Separate typescript and auto generated code with configuration


# Send the service worker a list of URLs to cache [ref](https://developer.chrome.com/docs/workbox/modules/workbox-window/#avoiding-common-mistakes)
For some applications, it's possible to know all the assets that need to be precached at build time, but some applications serve completely different pages, based on what URL the user lands on first.

For apps in the latter category, it might make sense to only cache the assets the user needed for the particular page they visited. When using the workbox-routing package, you can send your router a list of URLs to cache, and it will cache those URLs according to the rules defined on the router itself.

This example sends a list of URLs loaded by the page to the router any time a new service worker is activated. Note, it's fine to send all URLs because only the URLs that match a defined route in the service worker will be cached:

const wb = new Workbox('/sw.js');

wb.addEventListener('activated', event => {
  // Get the current page URL + all resources the page loaded.
  const urlsToCache = [
    location.href,
    ...performance.getEntriesByType('resource').map(r => r.name),
  ];
  // Send that list of URLs to your router in the service worker.
  wb.messageSW({
    type: 'CACHE_URLS',
    payload: {urlsToCache},
  });
});

// Register the service worker after event listeners have been added.
wb.register();

# Window to service worker communication
Most advanced service worker usage involves a lots of messaging between the service worker and the window. The Workbox class helps with this as well by providing a messageSW() method, which will postMessage() the instance's registered service worker and await a response.

While you can send data to the service worker in any format, the format shared by all Workbox packages is an object with three properties (the latter two being optional):

Property	Required?	Type	Description
type	Yes	string	
A unique string, identifying this message.

By convention, types are all uppercase with underscores separating words. If a type represents an action to be taken, it should be a command in present tense (e.g. CACHE_URLS), if type represent information being reported, it should be in past tense (e.g. URLS_CACHED).

meta	no	string	In Workbox this is always the name of the Workbox package sending the message. When sending message yourself, you can either omit this property or set it to whatever you like.
payload	no	*	The data being sent. Usually this is an object, but it does not have to be.
Messages sent via the messageSW() method use MessageChannel so the receiver can respond to them. To respond to a message you can call event.ports[0].postMessage(response) in your message event listener. The messageSW() method returns a promise that will resolve to whatever response you reply with.

Here's an example of sending messages from the window to the service worker and getting a response back. The first code block is the message listener in the service worker, and the second block uses the Workbox class to send the message and await the response:

Code in sw.js:

const SW_VERSION = '1.0.0';

addEventListener('message', event => {
  if (event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage(SW_VERSION);
  }
});
Code in main.js (running in the window):

const wb = new Workbox('/sw.js');
wb.register();

const swVersion = await wb.messageSW({type: 'GET_VERSION'});
console.log('Service Worker version:', swVersion);



[How to communicate with Service Worker](https://felixgerschau.com/how-to-communicate-with-service-workers/)
