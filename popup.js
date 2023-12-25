// popup.js

let key; // Declare key at the top level
let displayText; // Declare displayText at the top level

document.addEventListener("DOMContentLoaded", function () {
    // Create a Promise to handle the asynchronous operation
    const precheckedCheckboxesPromise = new Promise((resolve) => {
        // Send a message to the content script to get prechecked checkboxes information
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "getPrecheckedCheckboxes" }, function (response) {
                // Resolve the Promise with the response
                resolve(response);
            });
        });
    });

    // Use the resolved value in the then block
    precheckedCheckboxesPromise.then((data) => {
        // Update the popup UI based on the received information
        const [updatedDisplayText, updatedKey] = updatePopupUI(data);
        console.log(updatedDisplayText); // Display the updated text
        console.log(updatedKey); // Display the updated key

        // Export the updated key and displayText
        exportKeyAndText(updatedKey, updatedDisplayText);
    });
});

// Function to update the popup UI with prechecked checkboxes information
function updatePopupUI(data) {
    const displayAlertElement = document.getElementById("display-alert");
    const checkboxCountElement = document.getElementById("checkbox-count");
    const checkboxListElement = document.getElementById("checkbox-list");
    console.log(data && data.precheckedCheckboxes && data.precheckedCheckboxes.length > 0);

    if (data && data.precheckedCheckboxes && data.precheckedCheckboxes.length > 0) {
        console.log(data && data.precheckedCheckboxes && data.precheckedCheckboxes.length > 0);
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

        // Update the displayText
        key = "preCheckedBoxes";
        displayText = displayAlertElement.innerText;
    } else {
        displayAlertElement.innerText = "No prechecked checkboxes found.";
        checkboxCountElement.innerText = "0";
        key = "noPreCheckedBoxes";

        // Update the displayText
        displayText = displayAlertElement.innerText;
    }

    return [displayText, key];
}

// Export the updated key and displayText

// Export other variables
// export const updates = "some value";
// export const variable1 = "Value 1";
// export const variable2 = "Value 2";
// export const variable3 = "Value 3";

// Function to export the updated key and displayText
function exportKeyAndText(updatedKey, updatedDisplayText) {
    console.log(updatedKey);
    console.log(updatedDisplayText);
    // Perform any additional actions needed with the updated key and displayText
}

export { key as updatedKey, displayText };