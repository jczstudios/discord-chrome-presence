## Overview

<img src="https://i.imgur.com/Rg79DD6.png" width="20%" />
Discord-Chrome-Presence allows you to set your Discord Rich Presence to whatever you're looking at it in Chrome. An additional Chrome extension is included in order to rely site information.

## Requirements

* [Git](https://git-scm.com/)
* [Node](https://nodejs.org/en/)
* [Google Chrome](http://google.com/chrome) or [Chromium](https://www.chromium.org/getting-involved/download-chromium)

## Installation

```
git clone https://github.com/jczstudios/discord-chrome-presence
cd discord-chrome-presence
npm install
npm start
```
Then, install the Chrome extension from the extension directly. (Visit chrome://extensions, enable "Developer Mode", "Load Unpacked", choose the "Extension" directory inside this repository you cloned.

## Usage
Install the Google Chrome extension, included in the extension directory. Then, start the server using
```
npm start
```
Discord will need to be open and the Chrome extension needs to be added (see Installation). For now, your presence updates only when the active tab is updated [Chrome tabs API](https://developer.chrome.com/extensions/tabs#event-onUpdated). For example, refreshing the page, navigation, etc.

## License

[Unlicense](http://unlicense.org/)
