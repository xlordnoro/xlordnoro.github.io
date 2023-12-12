jQuery(function($) {
    // Function to update the image sources based on the extracted post number
    function updateImages(postNumber) {
        // Set the image sources based on the post number for cover and button images
        var coverImagePath = "https://raw.githubusercontent.com/xlordnoro/xlordnoro.github.io/master/cover_images/" + postNumber + "/cover.jpg";
        var bd1080ImagePath = "https://raw.githubusercontent.com/xlordnoro/xlordnoro.github.io/master/button_images/" + postNumber + "/bd1080.jpg";  // Replace with the actual URL for BD 1080p
        var bd720ImagePath = "https://raw.githubusercontent.com/xlordnoro/xlordnoro.github.io/master/button_images/" + postNumber + "/bd720.jpg";  // Replace with the actual URL for BD 720p
        var movieImagePath = "https://raw.githubusercontent.com/xlordnoro/xlordnoro.github.io/master/button_images/" + postNumber + "/movie.jpg";  // Replace with the actual URL for Movie

        // Update the cover image
        loadImage(coverImagePath, function () {
            $("#coverImage").attr("src", coverImagePath);
        }, function () {
            console.log("Cover image not found for post " + postNumber);
        });

        // Update the button images
        updateButtonImage("bd1080", "bd1080on", bd1080ImagePath);
        updateButtonImage("bd720", "bd720on", bd720ImagePath);
        updateButtonImage("movie", "movieon", movieImagePath);
    }

    // Function to update a button image
    function updateButtonImage(buttonId, buttonOnId, imagePath) {
        loadImage(imagePath, function () {
            // Set the source for the button image
            $("#" + buttonId).attr("href", "#");
            $("#" + buttonOnId).attr("src", imagePath);
        }, function () {
            // Handle the case when the button image is not found
            console.log(buttonId + " image not found");
        });
    }

    // Call the updateImages function with the extracted post number when the page loads
    $(document).ready(function () {
        var postNumber = extractPostNumber();
        updateImages(postNumber);
    });

    // Helper function to check if an image exists and execute callbacks accordingly
    function loadImage(src, successCallback, errorCallback) {
        var img = new Image();
        img.onload = successCallback;
        img.onerror = errorCallback;
        img.src = src;
    }

    // Function to extract the post number from the URL
    function extractPostNumber() {
        var currentURL = window.location.href;
        var urlParts = currentURL.split("/");
        var postNumber = urlParts[urlParts.length - 1];
        return postNumber;
    }
});
