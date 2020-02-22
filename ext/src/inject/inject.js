chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {		
			clearInterval(readyStateCheckInterval);
			chrome.extension.sendMessage({nomoretwitter:"url"}, function(response) {
				// ----------------------------------------------------------
				// This part of the script triggers when page is done loading						
				window.location.href = response.url;
				// ----------------------------------------------------------
			});
		}
	}, 10);
});