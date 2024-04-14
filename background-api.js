// JavaScript in background

// visibility Change

window.addEventListener('visibilitychange', (e)=>{
    if(document.visibilityState === 'visible'){
        // code to execute when page is visible
        console.log('Page is Visible');
    };
});

// let's see in Hidden condition

window.addEventListener('visibilitychange', ()=>{
    if(document.visibilityState === "hidden"){
        // code to execute in background when user is not using web-page
        console.log("Code to run in Background");
    }
});



// ths API is only available in chromium based browser

// Freeze event 

// this is is our last chance to save data.
window.addEventListener('freeze', ()=>{
    // Save State
    // saveData()
});


//  resume

window.addEventListener('resume', ()=>{
    // we are back from Suspension
    // No Need to restore 
});

// do we came back from suspension or it's new 

window.addEventListener("DOMContentLoaded", ()=>{
    if(document.wasDiscarded){
        // we are back from suspension but it was discarded so we need to restore data.

        restoreData();
    }
})