document.addEventListener("DOMContentLoaded", function() {
    // Get the Jestlandia element
    var jestlandiaElement = document.getElementById("name");

    // Add an event listener to detect mouse hover
    jestlandiaElement.addEventListener("mouseenter", function() {
        // Change the text color to a random color
        var randomColor = getRandomColor();
        jestlandiaElement.style.color = randomColor;
    });

    // Function to generate a random color
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});