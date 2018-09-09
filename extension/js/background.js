function updatePresence(tab) {
    if (tab) {
      var url = new URL(tab.url);
      var data = {
        action: "set",
        url: tab.url,
        details: url.hostname,
        state: tab.title,
        smallText: tab.url,
        largeText: tab.title
      };
    } else {
      var data = {
        action: "clear"
      };
    }

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://localhost:3000/",
      "method": "POST",
      "headers": {
        "content-type": "application/json"
      },
      "processData": false,
      "data": JSON.stringify(data)
    }

    $.ajax(settings);
}


var lastCheckedTabId;
var wasFocused;
setInterval(function () { // on an interval…
  chrome.windows.getLastFocused({populate: true}, function (window) { // get the last focused window
    if (window.focused) { // if it's focused
      if (window.tabs) // and it has tabs
        for (let tab of window.tabs) // iterate over tabs
          if (tab.highlighted) { // until we find the selected one
            if (tab.id != lastCheckedTabId || !wasFocused) { // if this is different than the tab we got last time, or the browser was not focused last time
              updatePresence(tab); // user has switched tabs; update our presence!
              lastCheckedTabId = tab.id; // remember the tab we found
            }
            break; // stop iterating over tabs
          }
      wasFocused = true; // remember that a window was focused last check
    } else { // it's not focused; user is not looking at chrome
      if (wasFocused) { // if it was focused on the last check
        updatePresence(null); // user has stopped looking at chrome; clear the presence.
      }
      wasFocused = false; // remember that no window was focused last check
    }
  });
}, 1000); // check every second