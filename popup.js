// popup.js

document.addEventListener("DOMContentLoaded", function () {
    // Send a message to the content script to get prechecked checkboxes information
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "getPrecheckedCheckboxes" }, function (response) {
            // Update the popup UI based on the received information
            // console.log(response)
            updatePopupUI(response);
        });
    });
});

// Function to update the popup UI with prechecked checkboxes information
function updatePopupUI(data) {
    const displayAlertElement = document.getElementById("display-alert");
    const checkboxCountElement = document.getElementById("checkbox-count");
    const checkboxListElement = document.getElementById("checkbox-list");

    // console.log(data.precheckedCheckboxes);
    // console.log(data);
    // console.log(data && data.precheckedCheckboxes)
    
    // if (data && data.precheckedCheckboxes)
    if (data.precheckedCheckboxes.length > 0) {
        displayAlertElement.innerText = "Prechecked checkboxes detected!";
        checkboxCountElement.innerText = data.precheckedCheckboxes.length;

        // Clear previous list items
        checkboxListElement.innerHTML = "";

        // Populate the list of prechecked checkboxes
        data.precheckedCheckboxes.forEach(function (checkboxLabel) {
            const listItem = document.createElement("li");
            listItem.innerText = checkboxLabel;
            checkboxListElement.appendChild(listItem);
        });
    } else {
        displayAlertElement.innerText = "No prechecked checkboxes found.";
        checkboxCountElement.innerText = "0";
    }
}
