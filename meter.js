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

function updateArcLength(value) {
    const arc_length = path.getTotalLength();
    const step = arc_length / (100 - 0); // Assuming a range from 0 to 100 for temperature
    const calculatedValue = (value - 0) * step;
    path.style.strokeDasharray = `${calculatedValue} ${arc_length - calculatedValue}`;
}

