// Service worker 

// A JavaScript running in its own thread that will act as a middleware offering a local installed web server or web proxy for your PWA, including ressoureces and API calls

// Runs client-side in browser's engine 

// HTTP required

// Installed by a web page

// own Thread and lifecyle

// Acts as a network proxy or local web server in the name of the real server

// Abilities to run in the background

// No need for user's permission



// service worker can be completely background and it run on it's own thread, but a part from that when we visit a web-page the service worker is activated it's do what need to be done by service worker and after that it become idle (in memory but dont do anything) after sometime when service is not doing anything then broser will ("You are not doing anything so it will stoped service worker") as I mentioned earliar that service worker can be completely background which mean you can run service worker of any site without visting is'nt a thread then if you do that and ythe service worker is perfomaing a havy task then the it can impact on system(os) you can't do that if you do then in few seconds you need to send notification to user  

// visit this to know how many service worker your chrome have ==> chrome://serviceworker-internals/

// =========================================================================================================


// There are two API to creating notification

// 1. Desktop Notification, for Window and worker 
// 2. Web Push, for Service Workers.

// web push and Notication both are different with the first method you can just send notification to Desktop in the 2nd method we will do web-push to wake-up our service worker and then our service worker will create notication.


// Step 1. 
// ask for Notification permission 

if('Notification' in window){
    if(Notification.permission === "granted"){

    }
    status = await Notification.requestPermission();
    //it can be 'granted', 'denied' and 'default'
}

// Step 2. Create the notification 
// old desktop Notification API; not available in service workers

const n = new Notification('Title', {
    body: 'Text',
    icon: 'Image-url'
});
// we can close it later n.close();