const gifs = [
  "./assets/gif1.gif",
  "./assets/gif2.gif",
  "./assets/gif3.gif",
  "./assets/gif4.gif",
  "./assets/gif5.gif",
  "./assets/gif6.gif",
  "./assets/gif7.gif",
  "./assets/gif8.gif",
  "./assets/gif9.gif",
];

const images = document.getElementsByTagName("img");
for (let i = 0; i < images.length; i++) {
  images[i].src = chrome.runtime.getURL(
    gifs[Math.floor(Math.random() * gifs.length)]
  );
}
