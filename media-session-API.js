// in case our web-page plays audio or video, there are special cases for background playin:
// 1. Picture in Picture API for video
// 2. Media Session API for metadata

// Media metadaa and events

navigator.mediaSession.metadata = new MediaMetadata({
    title: 'Best song',
    artist: 'shahid hashmi',
    album: 'Progressive Web Apps',
    artwork: []
});

// action:  plays, pause, stop, privous track nextTrack,...
navigator.mediaSession.setActionHandler(action, e=> {});


navigator.mediaSession.setActionHandler('play', ()=> {});
navigator.mediaSession.setActionHandler('pause', ()=> {});
navigator.mediaSession.setActionHandler('stop', ()=> {});
navigator.mediaSession.setActionHandler('seekforward', ()=> {}); // 10 second forward
navigator.mediaSession.setActionHandler('seekbackward', ()=> {});
navigator.mediaSession.setActionHandler('seekto', ()=> {});
navigator.mediaSession.setActionHandler('previoustrack', ()=> {});
navigator.mediaSession.setActionHandler('nexttrack', ()=> {});
navigator.mediaSession.setActionHandler('skipad', ()=> {});


// for video call

navigator.mediaSession.setActionHandler('hangup', ()=> {});
navigator.mediaSession.setActionHandler('togglecamera', ()=> {});
navigator.mediaSession.setActionHandler('togglemicrophone', ()=> {});


// ================== Picture in Picture API ===================

// Toggle PIP

if(document.pictureInPictureElement){
    document.exitPictureInPicture();
}else if(document.pictureInPictureEnabled){
    video.requestPictureInPicture();
};

// Network request 

//  if your web app to goes to the background while a network request is in process, it may be aborted.

// Soltution 

// - Beacon API, if suitable
// - Web Background Synchronization API
// - Background Fetch API

// Beacon API

// For request where we don't care about it's response

document.addEventListener('visibilitychange', ()=>{
    if(document.visibilityState === 'hidden'){
        navigator.sendBeacon('/log-hidden', someData);
    };
});

