(function () {
  const div = document.getElementById("livelp");

  const iframe = document.createElement("iframe");
  // iframe.src = 'https://livelp.net/1.2.2/iframe.html?key=' + div.dataset.key
  // iframe.src = 'https://localhost:3000/1.2.2/iframe.html?key=' + div.dataset.key
  iframe.src = "./iframe.html?key=" + div.dataset.key;

  iframe.id = "livelp-iframe";
  iframe.scrolling = "no";
  iframe.overflow = "hidden";
  iframe.style.opacity = 0;
  iframe.frameBorder = 0;
  iframe.marginWidth = 0;
  iframe.marginHeight = 0;
  iframe.style.zIndex = "2147483647";
  iframe.style.display = "block";
  iframe.style.position = "fixed";
  iframe.style.overflow = "hidden";
  iframe.style.width = 0;
  iframe.style.height = 0;

  window.addEventListener(
    "message",
    (event) => {
      // if (event.origin.startsWith("https://livelp.net")) {
      Object.assign(iframe.style, event.data);
      // }
    },
    { once: false }
  );

  div.appendChild(iframe);
})();
