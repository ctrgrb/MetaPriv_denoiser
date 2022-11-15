
chrome.tabs.onUpdated.addListener((tabId, tab) => {
	
	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

		chrome.tabs.sendMessage(tabId, {
			type: "NEW",
			value: request.data
		});

		sendResponse("serviceWorker.js got your message and responded");
	});
	
});


   

