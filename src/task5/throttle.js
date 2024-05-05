function throttle(func, interval) {
  let lastExecutionTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastExecutionTime <=interval) {
      return;
    }
    lastExecutionTime = now;
    return func(...args);
  };
}

function onScroll(event) {
  // Handle scroll event
  console.log("Scroll event:", event);
}

const throttledScrollHandler = throttle(onScroll, 1000);

window.addEventListener("scroll", throttledScrollHandler);
