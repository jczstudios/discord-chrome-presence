function updatePresence(tabId, changeInfo, tab) {
  if (tab.active === true && !(tab.url == undefined)) {
    var url = new URL(tab.url);

    var data = {
      url: tab.url,
      details: url.hostname,
      state: tab.title,
      smallText: tab.url,
      largeText: tab.title
    };

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
}

chrome.tabs.onUpdated.addListener(updatePresence);