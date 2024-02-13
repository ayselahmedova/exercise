// Task 1: Change the color of the greeting text
document.getElementById('colorButton').addEventListener('click', function() {
     // Get the 'greeting' element
     var greetingElement = document.getElementById('greeting');

     // Generate a random color
     var randomColor = getRandomColor();
 
     // Set the 'greeting' element's color to the random color
     greetingElement.style.color = randomColor;
});

// Task 2: Change the text content of the greeting
document.getElementById('textButton').addEventListener('click', function() {
    // Get the 'greeting' element
    var greetingElement = document.getElementById('greeting');

    // Set the text content of the 'greeting' element to "Hello, World!"
    greetingElement.innerHTML = 'Hello, World';
});

// Helper function for generating a random color (Complete for the applicant)
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}