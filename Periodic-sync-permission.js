
/*
    we can run a task in background in set interval of time using periodic-sync-background API but there are some condiation that browser follow like battery and more but one think is also important to note that brower give an Engagement score to a web-page means when we first time visit a web-site the engagement score is low if we use that app again again then the engagement score will increse after that we have right to use this API 
*/ 

// step 1 ask for periodic sync permission 
// permission will be granted bassed on site Engagement Score.
async function permission(){
    const permissionStatus = await navigator.permissions.query({ // asking permission to the browser
        name: 'periodic-background-sync',
    });
    
    if(permissionStatus.state === 'granted'){
        track('periodic-sync', 'granted');
    }else{
        track('periodic-sync', 'denied');
    }
// step 2. Register a background sync operation
// it require a tag and synchronization interval in miliseconds
    const regisration = await navigator.serviceWorker.ready;

    await regisration.periodicSync.register('sync-tag', {
        minInterval: 24 * 60 * 60 * 1000 // one day
    });
};

// step 3 handle the periodic sycn operation 
//  it will be esecutined in the service worker

self.addEventListener('periodicsync', (event)=>{
    if(event.tag === 'sync-tag'){
        event.waitUntil(doPerodicSyncOperation());f
    }
})