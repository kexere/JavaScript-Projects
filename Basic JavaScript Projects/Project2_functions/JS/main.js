 // Function to change the background color to blue
function changeToBlue() {
    document.body.style.backgroundColor = "blue";
}
  
// Function to change the background color to green
function changeToGreen() {
    document.body.style.backgroundColor = "green";
}
  
// Add click event listeners to the buttons
document.getElementById("button1").addEventListener("click", changeToBlue);
document.getElementById("button2").addEventListener("click", changeToGreen);

// Function that uses += operator
function myFunction() {
    var sentence = "I am learning"; //create variable
    sentence += " a lot from this course!"; // uses += operator to add to the variable
    document.getElementById("Concatenate").innerHTML = sentence; // usimg document.getElementById()
}