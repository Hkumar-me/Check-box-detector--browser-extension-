import { updatedKey, displayText } from './popup.js';
// import { variable1, variable2, variable3} from './popup.js';

// console.log(variable1);
// console.log(variable2);
// console.log(variable3);
console.log(updatedKey);
console.log(displayText);


// document.addEventListener('DOMContentLoaded', function () {
//     const path = document.getElementById("path");

//     function updateArcLength(value) {
//         const arc_length = path.getTotalLength();
//         const step = arc_length / (100 - 0); // Assuming a range from 0 to 100 for temperature
//         const calculatedValue = (value - 0) * step;

//         console.log("Calculated Value:", calculatedValue);

//         path.style.strokeDasharray = `${calculatedValue} ${arc_length - calculatedValue}`;
//         console.log("Stroke Dasharray:", path.style.strokeDasharray);
//     }

//     updateArcLength(90);
// });

const path = document.getElementById("path");
// let test = document.createElement("h1");
// test.textContent = updates;
// document.body.appendChild(test);

const darkPatterns = {
    disguisedAds: 33,
    confirmshaming: 47,
    trickyQuestionsAndCountdown: 59,
    priceComparisonPrevention: 54,
    friendSpamAndMisdirection: 78,
    sneakIntoBasketAndPreCheckedCheckboxes: 41,
    roachMotelAndHiddenCosts: 93,
    baitAndSwitch: 64,
    privacyZuckering: 86,
    forcedContinuity: 80,
    preCheckedBoxes: 37
};

function updateArcLength(value) {
    const arc_length = path.getTotalLength();
    const step = arc_length / (100 - 0); // Assuming a range from 0 to 100 for temperature
    const calculatedValue = (value - 0) * step;
    path.style.strokeDasharray = `${calculatedValue} ${arc_length - calculatedValue}`;
}

function detectDarkPattern(darkPatternName) {
    if (darkPatterns.hasOwnProperty(darkPatternName)) {
        const dangerLevel = darkPatterns[darkPatternName];
        const temperature = document.getElementById("temperature");
        temperature.textContent = dangerLevel;
        // console.log(darkPatternName);
        // console.log(dangerLevel);
        updateArcLength(dangerLevel);
    } else {
        console.error("Dark pattern not found in the list.");
    }
}

// Example usage:
const detectedDarkPattern = updatedKey;
detectDarkPattern(detectedDarkPattern);