chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.nomoretwitter )
      sendResponse({
        url: Storage.get_option("url","https://mastodon.madrid")
      });
});
  
  