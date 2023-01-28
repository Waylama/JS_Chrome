const title = document.querySelector("div:first-child .hello");

function handleTitleClick(){
    console.log("title was clicked!")
}
title.addEventListener("click", handleTitleClick);


function handleMouseEnter(){
    title.innerText = "Mouse is here";
}

title.addEventListener("mouseenter", handleMouseEnter);

function handleMouseLeave(){
    title.innerText = "Mouse is gone";
}


title.onmouseleave = handleMouseLeave;

title.removeEventListener("click",handleTitleClick);

// window event 

function handleWindowResize(){
    document.body.style.backgroundColor = "yellow";
}

window.addEventListener("resize",handleWindowResize);


function handleWindowCopy(){
    alert("Copy!!!!");
}
window.addEventListener("copy", handleWindowCopy);


function handleWindowOffline(){
    alert("No Wifi");
}

function handleWindowOnline(){
    alert("Connect Wifi");
}
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);