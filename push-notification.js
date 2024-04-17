// Web push Notification

/*
    1. PWA asks permission to send notification to the user
    2. if granted, now the service worker can create a notification fom the background
    3. also, the PWA can subscribe the user to push
    4. A 'push' event will fired in the service worker to handle a push
    5. Firfox, Chore, Edge, Samdung Internet
    6. Safari from macOS 13 (Ventira), IOS and iPadOS from some version from 2023
*/ 

// 

if('Notification' in window){
    if(Notification.permission === "granted"){
        track('notification', "granted")
    }
    status = await Notification.requestPermission();
    track('notification', "granted")

    //it can be 'granted', 'denied' and 'default'
}