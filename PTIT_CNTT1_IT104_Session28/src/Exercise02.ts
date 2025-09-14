type Callback = () => void;

function delayedCallback(callback: Callback, delay: number) {
  setTimeout(() => {callback()}, delay);
}

delayedCallback(() => {
  console.log("Delay 3s");
}, 3000);
