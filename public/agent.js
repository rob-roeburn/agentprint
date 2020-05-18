let today = new Date(0);
today.setUTCSeconds(window.performance.timeOrigin)
document.getElementById("info").innerHTML += "<b>User agent</b>: "+window.navigator.userAgent+"<br>";
document.getElementById("info").innerHTML += "<b>App name</b>: "+window.navigator.appCodeName+"<br>";
document.getElementById("info").innerHTML += "<b>App Version</b>: "+window.navigator.appVersion+"<br>";
document.getElementById("info").innerHTML += "<b>Build ID</b>: "+window.navigator.buildID+"<br>";
document.getElementById("info").innerHTML += "<b>Language</b>: "+window.navigator.language+"<br>";
document.getElementById("info").innerHTML += "<b>Max Touch Points</b>: "+window.navigator.maxTouchPoints+"<br>";
document.getElementById("info").innerHTML += "<b>OS CPU</b>: "+window.navigator.oscpu+"<br>";
document.getElementById("info").innerHTML += "<b>Platform</b>: "+window.navigator.platform+"<br>";
document.getElementById("info").innerHTML += "<b>Product</b>: "+window.navigator.product+"<br>";
document.getElementById("info").innerHTML += "<b>Origin</b>: "+window.origin+"<br>";
document.getElementById("info").innerHTML += "<b>outerHeight</b>: "+window.outerHeight+"<br>";
document.getElementById("info").innerHTML += "<b>outerWidth</b>: "+window.outerWidth+"<br>";
document.getElementById("info").innerHTML += "<b>Time Origin</b>: "+today+"<br>";
