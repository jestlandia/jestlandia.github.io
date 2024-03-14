document.addEventListener("DOMContentLoaded", function() {
    // Get the Jestlandia element
    var jestlandiaElement = document.getElementById("name");

    // Add an event listener to detect mouse hover
    jestlandiaElement.addEventListener("mouseenter", function(event) {
        // Change the text color of each letter to a random color
        var letters = jestlandiaElement.querySelectorAll("span");
        letters.forEach(function(letter) {
            var randomColor = getRandomColor();
            letter.style.color = randomColor;
        });

        // Schedule a color reset after 10 seconds
        setTimeout(function() {
            letters.forEach(function(letter) {
                letter.style.color = ''; // Reset to default color
            });
        }, 10000); // 10 seconds in milliseconds
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
