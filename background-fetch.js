/* 
  PWA ask the web engine to make some frtch download requests 
  the browser will download the request in the background while showing an OS notification abaout the  process

  Events will be fired in the service Worker When:
  Download finishes
  * if the User has clicked the notification 
  * on abort or failure
  * On Progress

*/

//  Step 1. Start a background fetch request

const register = await  navigator.serviceWorker.ready;

const fetch = await register.backgroundFetch.fetch(
    'fetch-name', ['url', 'url'],
    {
        title: 'Offline Content',
        icons : [{sizes: '300 x 300', src :'icon.png', type: 'images/png'}],
        downloadTotal: 20 * 1024 * 1024,
    }
);

//  Step 2 Handle event in service worker

self.addEventListener('backgroundfetchsuccess', async (event)=>{
    const downloadDiles = await event.registeration.matchAll();
})

//  on failure 

self.addEventListener('backgroundfetchfailure', async (event)=>{
    const downloadDiles = await event.registeration.matchAll();
})
// remember that file are download in service worker