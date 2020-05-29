let today = new Date(0);
today.setUTCSeconds(window.performance.timeOrigin/1000)
let s = document.createElement("span");
let c = document.createElement("canvas");
let gl = document.createElement("canvas").getContext("webgl");
let ext = gl.getExtension("WEBGL_debug_renderer_info");

document.getElementById("info").innerHTML += "<b>User agent</b>: "+window.navigator.userAgent+"<br>";
document.getElementById("info").innerHTML += "<b>App name</b>: "+window.navigator.appCodeName+"<br>";
document.getElementById("info").innerHTML += "<b>App Version</b>: "+window.navigator.appVersion+"<br>";
document.getElementById("info").innerHTML += "<b>Build ID</b>: "+window.navigator.buildID+"<br>";
document.getElementById("info").innerHTML += "<b>Max Touch Points</b>: "+window.navigator.maxTouchPoints+"<br>";
document.getElementById("info").innerHTML += "<b>Language</b>: "+window.navigator.language+"<br>";
document.getElementById("info").innerHTML += "<b>Languages</b>: "+window.navigator.languages+"<br>";
document.getElementById("info").innerHTML += "<b>OS CPU</b>: "+window.navigator.oscpu+"<br>";
document.getElementById("info").innerHTML += "<b>Platform</b>: "+window.navigator.platform+"<br>";
document.getElementById("info").innerHTML += "<b>Product</b>: "+window.navigator.product+"<br>";
document.getElementById("info").innerHTML += "<b>Origin</b>: "+window.origin+"<br>";
document.getElementById("info").innerHTML += "<b>outerHeight</b>: "+window.outerHeight+"<br>";
document.getElementById("info").innerHTML += "<b>outerWidth</b>: "+window.outerWidth+"<br>";
document.getElementById("info").innerHTML += "<b>Bitdepth</b>: "+window.screen.pixelDepth+"<br>";
document.getElementById("info").innerHTML += "<b>Time Origin</b>: "+today+"<br>";
document.getElementById("info").innerHTML += "<b>Epoch</b>: "+window.performance.timeOrigin+"<br>";
document.getElementById("info").innerHTML += "<b>Cookie</b>: "+document.cookie+"<br>";
document.getElementById("info").innerHTML += "<b>Server Name</b>: "+window.location.href+"<br>";
document.getElementById("info").innerHTML += "<b>Timezone Offset</b>: "+new Date().getTimezoneOffset()+"<br>";
document.getElementById("info").innerHTML += "<b>Span</b>: "+s+"<br>";
document.getElementById("info").innerHTML += "<b>Do Not Track</b>: "+window.navigator.doNotTrack+"<br>";
document.getElementById("info").innerHTML += "<b>Hardware Concurrency</b>: "+window.navigator.hardwareConcurrency+"<br>";
document.getElementById("info").innerHTML += "<b>WebGL Vendor ID</b>: "+gl.VENDOR+"<br>";
document.getElementById("info").innerHTML += "<b>WebGL Renderer ID</b>: "+gl.RENDERER+"<br>";
document.getElementById("info").innerHTML += "<b>WebGL Shading language version</b>: "+gl.SHADING_LANGUAGE_VERSION+"<br>";
document.getElementById("info").innerHTML += "<b>WebGL Unmasked renderer</b>: "+ext.UNMASKED_RENDERER_WEBGL+"<br>";
document.getElementById("info").innerHTML += "<b>WebGL Unmasked vendor</b>: "+ext.UNMASKED_VENDOR_WEBGL+"<br>";

let withCanvasDrawing = new Fingerprint({canvas: true});
let withoutCanvasDrawing = new Fingerprint({canvas: false});
let javaHashFunction = new Fingerprint({hasher: javaHashCode});

window.onload = function() {
  document.getElementById('fp').src = withCanvasDrawing.getCanvasFingerprint();
}

window.addEventListener('deviceorientation', function(event) {
 console.log(event.alpha + ' : ' + event.beta + ' : ' + event.gamma);
});
