"use strict";
function delayedCallback(callback, delay) {
    setTimeout(() => { callback(); }, delay);
}
delayedCallback(() => {
    console.log("Delay 3s");
}, 3000);
