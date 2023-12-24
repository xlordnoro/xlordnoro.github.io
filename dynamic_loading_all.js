jQuery(function ($) {
    // Function to update the image sources based on the extracted post number
    function updateImages(postNumber) {
        var coverImagePath = "https://raw.githubusercontent.com/xlordnoro/xlordnoro.github.io/master/cover_images/" + postNumber + "/cover.jpg";
        var bd1080ImagePath = "https://raw.githubusercontent.com/xlordnoro/xlordnoro.github.io/master/button_images/" + postNumber + "/bd1080.jpg";
        var bd720ImagePath = "https://raw.githubusercontent.com/xlordnoro/xlordnoro.github.io/master/button_images/" + postNumber + "/bd720.jpg";

        // Donation image path
        var donationImagePath = "https://raw.githubusercontent.com/xlordnoro/xlordnoro.github.io/master/donation_images/" + postNumber + "/donation.jpg";

        // Update the cover image if any of the anchor tags or images are present
        var coverImageElements = $('a.coverImage, p.image');
        if (coverImageElements.length) {
            loadImage(coverImagePath, function () {
                coverImageElements.find("img").attr("src", coverImagePath);
                console.log("Cover image loaded successfully!");
            });
        }

        // Update the button images if the div with class "button_code" is present
        if ($('.button_code').length) {
            updateButtonImage("bd1080", "bd1080on", bd1080ImagePath);
            updateButtonImage("bd720", "bd720on", bd720ImagePath);
        }

        // Update the donation image if the anchor tag with class "donateImage" is present
        if ($('a.donateImage, p.donation img').length) {
            updateDonationImage(postNumber, donationImagePath);
        }

        // Update the aligncenter image if the class "aligncenter" is present
        var alignCenterImageElements = $('img.aligncenter');
        if (alignCenterImageElements.length) {
            loadImage(coverImagePath, function () {
                alignCenterImageElements.attr("src", coverImagePath);
                console.log("Align Center image loaded successfully!");
            });
        }
    }

    // Function to update a button image
    function updateButtonImage(buttonId, buttonOnId, imagePath) {
        loadImage(imagePath, function () {
            // Set the source for the button image
            $("#" + buttonId).attr("href", "#");
            $("#" + buttonOnId).attr("src", imagePath);
            console.log(buttonId + " image loaded successfully!");
        }, function (error) {
            // Handle the case when the button image is not found
            console.log(buttonId + " image not found:", error);
            // You can optionally add a placeholder URL here if needed
        });
    }

    // Function to update the donation image
    function updateDonationImage(postNumber, donationImagePath) {
        loadImage(donationImagePath, function () {
            // Set the source for the donation image
            $("a.donateImage img, p.donation img").attr("src", donationImagePath);
            console.log("Donation image loaded successfully!");
        }, function (error) {
            // Handle the case when the donation image is not found
            console.log("Donation image not found:", error);
            // You can optionally add a placeholder URL here if needed
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
        img.onerror = function () {
            errorCallback("Failed to load image: " + src);
        };
        img.src = src;
    }

    // Function to extract the post number from the URL without the ".html" extension
    function extractPostNumber() {
        var currentURL = window.location.href;
        var urlParts = currentURL.split("/");
        var lastPart = urlParts[urlParts.length - 1];
        // Remove ".html" extension if present
        return lastPart.replace(".html", "");
    }
});