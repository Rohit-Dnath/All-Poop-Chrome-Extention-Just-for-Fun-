# All-Poop-Chrome-Extention-Just-for-Fun-
A funny Chrome Extension built with Json
If you want to see poop everywhere, you've come to the right place!



Manifest.json

{
  "manifest_version": 3,
  "name": "All poop",
  "version": "1.0.0",
  "description": "If you want to see poop everywhere, you've come to the right place!",
  "icons": {
    "128": "assets/logo128.png"
  },
  "content_scripts": [{
    "js": ["content.js"],
    "matches": ["<all_urls>"],
    "run_at": "document_idle"
  }],
  "web_accessible_resources": [{
    "matches": ["<all_urls>"],
    "resources": ["assets/*"]
  }]
}

content.js


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
