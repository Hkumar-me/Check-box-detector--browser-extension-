// Listen for messages from the content script
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     if (request.action === "changeDisplayAlert") {
//         // Send a message to the popup to update the display-alert element
//         chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//             chrome.tabs.sendMessage(tabs[0].id, { action: "updateDisplayAlert" });
//         });
//     }
// });


// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "changeDisplayAlert") {
        // Send a message to the popup to update the display-alert element
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "updateDisplayAlert" });
        });
    }
});
