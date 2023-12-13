// Use jQuery(function($)) to ensure the document is ready and $ is available
jQuery(function ($) {
    // Function to update the image sources based on the extracted post number
    function updateImages(postNumber) {
        var coverImagePath = "https://raw.githubusercontent.com/xlordnoro/xlordnoro.github.io/master/cover_images/" + postNumber + "/cover.jpg";
        var bd1080ImagePath = "https://raw.githubusercontent.com/xlordnoro/xlordnoro.github.io/master/button_images/" + postNumber + "/bd1080.jpg";
        var bd720ImagePath = "https://raw.githubusercontent.com/xlordnoro/xlordnoro.github.io/master/button_images/" + postNumber + "/bd720.jpg";
        var movieImagePath = "https://raw.githubusercontent.com/xlordnoro/xlordnoro.github.io/master/button_images/" + postNumber + "/movie.jpg";

        // Update the cover image
        $("#coverImage").attr("src", coverImagePath).on("error", function () {
            console.error("Error loading cover image:", coverImagePath);
        });
        console.log("Cover image loaded successfully!");

        // Update the button images
        updateButtonImage("bd1080", "bd1080on", bd1080ImagePath);
        updateButtonImage("bd720", "bd720on", bd720ImagePath);
        updateButtonImage("movie", "movieon", movieImagePath);
    }

    // Function to update a button image
    function updateButtonImage(buttonId, buttonOnId, imagePath) {
        // Set the source for the button image
        $("#" + buttonId).attr("href", "#").on("error", function () {
            console.error(buttonId + " image not found:", imagePath);
        });
        $("#" + buttonOnId).attr("src", imagePath).on("error", function () {
            console.error(buttonOnId + " image not found:", imagePath);
        });
        console.log(buttonId + " image loaded successfully!");
    }

    // Call the updateImages function with the extracted post number when the page loads
    var postNumber = extractPostNumber();
    updateImages(postNumber);

    // Function to extract the post number from the URL without the ".html" extension
    function extractPostNumber() {
        var currentURL = window.location.href;
        var urlParts = currentURL.split("/");
        var lastPart = urlParts[urlParts.length - 1];
        // Remove ".html" extension if present
        return lastPart.replace(".html", "");
    }
});
