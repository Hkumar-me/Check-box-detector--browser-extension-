
// Listen for messages from the popup
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//   if (request.action === "updateDisplayAlert") {
//       // Access the DOM of the popup and perform actions
//       let displayAlertElement = document.getElementById("display-alert");
//       if (displayAlertElement) {
//           // Perform actions with the element
//           displayAlertElement.innerText = "Changed from content script!";
//       } else {
//           console.log("Element with id 'display-alert' not found in popup");
//       }
//   }
// });


// window.addEventListener("load", function main(){
//   let arrayOfAllInputs = document.querySelectorAll("input");
//   let displayAlert = document.getElementById("display-alert");
//   console.log(displayAlert)
//   console.log( typeof arrayOfAllInputs);
//   let preCheckedBoxes;
//   let found;
//   arrayOfAllInputs.forEach((element) =>{
//       if(element.checked){
//         found =true;
//         preCheckedBoxes = document.querySelectorAll("input[checked]");
//         console.log(found)
//         console.log(preCheckedBoxes);
//       }
//   })
//   console.log(preCheckedBoxes);
//   console.log(found);

//   if(found){
//     alert(preCheckedBoxes.length +" "+"PRE-CHECKED BOXES FOUND");
//     console.log(found)
//     displayAlert = "hello";
//   }


// }

// )














// contentScript.js

// Function to find and return the labels of prechecked checkboxes



function findPrecheckedCheckboxes() {
  const precheckedCheckboxes = [];
  const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  // console.log(checkboxes);

  checkboxes.forEach(function (checkbox) {
    const labelElement = findLabelForCheckbox(checkbox);
    if (labelElement) {
      precheckedCheckboxes.push(labelElement.innerText.trim());
      // precheckedCheckboxes.push(labelElement.innerHTML.trim());
    }
  });
  // console.log(precheckedCheckboxes)
  return precheckedCheckboxes;
}


// Function to find the associated label for a checkbox
function findLabelForCheckbox(checkbox) {
  // Check if the checkbox is inside a label element
  let labelElement = checkbox.closest('label');

  if (!labelElement) {
    // If not, find the label associated with the checkbox
    const id = checkbox.id || checkbox.getAttribute('aria-labelledby');
    if (id) {
      labelElement = document.querySelector(`label[for="${id}"]`);
    }
  }
  // console.log(labelElement)
  return labelElement;
}

// Send a message to the popup with information about prechecked checkboxes
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "getPrecheckedCheckboxes") {
    const precheckedCheckboxes = findPrecheckedCheckboxes();
    sendResponse({ precheckedCheckboxes });
  }
});

// Perform any other actions or logic related to detecting prechecked checkboxes on the page
// ...

// export const updates = "some value";
// export const variable1 = "Value 1";
// export const variable2 = "Value 2";
// export const variable3 = "Value 3";