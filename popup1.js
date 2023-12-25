// Declare global object
window.popupValues = {};

document.addEventListener("DOMContentLoaded", function () {
    const precheckedCheckboxesPromise = new Promise((resolve) => {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "getPrecheckedCheckboxes" }, function (response) {
                resolve(response);
            });
        });
    });

    precheckedCheckboxesPromise.then((data) => {
        const [updatedDisplayText, updatedKey] = updatePopupUI(data);

        // Store the updated values in the global object
        window.popupValues = {
            updatedKey,
            updatedDisplayText,
        };

        // Export the updated key and displayText
        exportKeyAndText(window.popupValues.updatedKey, window.popupValues.updatedDisplayText);

        // Now call a function in meter.js
        handleMeterJs();
    });
});

function updatePopupUI(data) {
    const displayAlertElement = document.getElementById("nameOfDarkPattern");
    const checkboxCountElement = document.getElementById("frequency");

    let key; // Declare key locally
    let displayText; // Declare displayText locally

    if (data && data.precheckedCheckboxes && data.precheckedCheckboxes.length > 0) {
        displayAlertElement.innerText = "Prechecked checkboxes detected!";
        checkboxCountElement.innerText = data.precheckedCheckboxes.length;

        // Update the displayText
        key = "preCheckedCheckboxes";
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

console.log(window.popupValues)
// Function to export the updated key and displayText
function exportKeyAndText(updatedKey, updatedDisplayText) {
    console.log("Exported Key:", updatedKey);
    console.log("Exported DisplayText:", updatedDisplayText);
    // Perform any additional actions needed with the updated key and displayText
}

// Function to handle the execution of meter.js
function handleMeterJs() {
    const meterScript = document.createElement('script');
    meterScript.setAttribute('src', 'meter.js');
    document.head.appendChild(meterScript);
}