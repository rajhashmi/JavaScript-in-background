/*
You can wake up your code client-side while in the background and/or continue execution code after lesasving the web app using"

API available today :->

1. Background Sync 
2. Periodic Background Sync
3. Background Fetch

Remember execution happens in the backround; maybe no PWA's page is currently loaded.

Use web Notication for messaging the user

*/
 
// 1. Background Sync
// 
// The Background Sync API in JavaScript allows web applications to defer actions until the user has stable connectivity. It's particularly useful for scenarios where you want to ensure that certain tasks, like sending queued data or updating content, are executed reliably even if the user temporarily loses internet connection.

// Step 1. Register a background sync action 
//  avaialbe from the window or service worker contexts

if('SyncManager' in window){
    const regisration = await navigator.serviceWorker.ready; // ready is the property that return an object
    regisration.sync.register("tag-name") // why not file..? we will store our data in server in indexedDB cuz service worker only have access to indexedDB
}


// step 2 Handle the Sync Action 
// this happens in the service worker's contexts at any moment 

// in sevice worker
self.addEventListener('sync', event => {
    if(event.tag == 'tag-name'){
        event.waitUntil(syncOperation());
    }
});

