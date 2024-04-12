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
})