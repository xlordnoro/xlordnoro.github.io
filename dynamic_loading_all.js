jQuery(function ($) {
    // Function to update the image sources based on the extracted post number
    function updateImages(postNumber) {
        var coverImagePath = "https://raw.githubusercontent.com/xlordnoro/xlordnoro.github.io/master/cover_images/" + postNumber + "/cover.jpg";
        var bd1080ImagePath = "https://raw.githubusercontent.com/xlordnoro/xlordnoro.github.io/master/button_images/" + postNumber + "/bd1080.jpg";
        var bd720ImagePath = "https://raw.githubusercontent.com/xlordnoro/xlordnoro.github.io/master/button_images/" + postNumber + "/bd720.jpg";
        var ovaImagePath = "https://raw.githubusercontent.com/xlordnoro/xlordnoro.github.io/master/button_images/" + postNumber + "/ova.jpg";
        var S1ImagePath = "https://raw.githubusercontent.com/xlordnoro/xlordnoro.github.io/master/button_images/" + postNumber + "/S1.jpg";
        var S2ImagePath = "https://raw.githubusercontent.com/xlordnoro/xlordnoro.github.io/master/button_images/" + postNumber + "/S2.jpg";
        var S3ImagePath = "https://raw.githubusercontent.com/xlordnoro/xlordnoro.github.io/master/button_images/" + postNumber + "/S3.jpg";
        var S4ImagePath = "https://raw.githubusercontent.com/xlordnoro/xlordnoro.github.io/master/button_images/" + postNumber + "/S4.jpg";
        var S5ImagePath = "https://raw.githubusercontent.com/xlordnoro/xlordnoro.github.io/master/button_images/" + postNumber + "/S5.jpg";
        
        // New button image paths
        var firstSeasonBd1080Path = "https://raw.githubusercontent.com/xlordnoro/xlordnoro.github.io/master/button_images/" + postNumber + "/first_season_bd1080.jpg";
        var firstSeasonBd720Path = "https://raw.githubusercontent.com/xlordnoro/xlordnoro.github.io/master/button_images/" + postNumber + "/first_season_bd720.jpg";
        var secondSeasonBd1080Path = "https://raw.githubusercontent.com/xlordnoro/xlordnoro.github.io/master/button_images/" + postNumber + "/second_season_bd1080.jpg";
        var secondSeasonBd720Path = "https://raw.githubusercontent.com/xlordnoro/xlordnoro.github.io/master/button_images/" + postNumber + "/second_season_bd720.jpg";
        var thirdSeasonBd1080Path = "https://raw.githubusercontent.com/xlordnoro/xlordnoro.github.io/master/button_images/" + postNumber + "/third_season_bd1080.jpg";
        var thirdSeasonBd720Path = "https://raw.githubusercontent.com/xlordnoro/xlordnoro.github.io/master/button_images/" + postNumber + "/third_season_bd720.jpg";
        var fourthSeasonBd1080Path = "https://raw.githubusercontent.com/xlordnoro/xlordnoro.github.io/master/button_images/" + postNumber + "/fourth_season_bd1080.jpg";
        var fourthSeasonBd720Path = "https://raw.githubusercontent.com/xlordnoro/xlordnoro.github.io/master/button_images/" + postNumber + "/fourth_season_bd720.jpg";
        var fifthSeasonBd1080Path = "https://raw.githubusercontent.com/xlordnoro/xlordnoro.github.io/master/button_images/" + postNumber + "/fifth_season_bd1080.jpg";
        var fifthSeasonBd720Path = "https://raw.githubusercontent.com/xlordnoro/xlordnoro.github.io/master/button_images/" + postNumber + "/fifth_season_bd720.jpg";
        var sixthSeasonBd1080Path = "https://raw.githubusercontent.com/xlordnoro/xlordnoro.github.io/master/button_images/" + postNumber + "/sixth_season_bd1080.jpg";
        var sixthSeasonBd720Path = "https://raw.githubusercontent.com/xlordnoro/xlordnoro.github.io/master/button_images/" + postNumber + "/sixth_season_bd720.jpg";

        // Donation image path
        var donationImagePath = "https://raw.githubusercontent.com/xlordnoro/xlordnoro.github.io/master/donation_images/" + postNumber + "/donation.jpg";

        // Update the cover image if any of the anchor tags or images are present
        var coverImageElements = $('a.coverImage, p.image, a.coverImage1, img.animeImage, img.coverImage, img.mainImage, a.postMakerAShowMovie');
        if (coverImageElements.length) {
            loadImage(coverImagePath, function () {
                coverImageElements.find("img").attr("src", coverImagePath);
                coverImageElements.attr("src", coverImagePath);
                console.log("Cover image loaded successfully!");
            });
        }

		// Additional cover image paths
        for (var i = 0; i < 6; i++) {
        // Use a closure to capture the current loop variable
        (function (index) {
        var currentImagePath;
            if (index === 0) {
                currentImagePath = "https://raw.githubusercontent.com/xlordnoro/xlordnoro.github.io/master/cover_images/" + postNumber + "/cover.jpg";
                } else {
                currentImagePath = "https://raw.githubusercontent.com/xlordnoro/xlordnoro.github.io/master/cover_images/" + postNumber + "/cover" + index + ".jpg";
                }
                var coverImageElements = $('.coverImage');

                if (coverImageElements.length) {
                    loadImage(currentImagePath, function () {
                        coverImageElements.find("img").eq(index).attr("src", currentImagePath);
                        console.log("Cover image loaded successfully!");
                    }, function (error) {
                        console.error(error);
                    });
                }
            })(i);
        }

        // Update the button images if the div with class "button_code" is present
        if ($('.button_code, div[style="margin-left: auto; margin-right: auto;"]').length) {
            console.log("Before updateButtonImage");
            updateButtonImage("bd1080", "bd1080on", bd1080ImagePath);
            updateButtonImage("bd720", "bd720on", bd720ImagePath);
            updateButtonImage("1080", "1080on", bd1080ImagePath);
            updateButtonImage("720", "720on", bd720ImagePath);
            updateButtonImage("ova", "ovaon", ovaImagePath);
            updateButtonImage("S1", "S1on", S1ImagePath);
            updateButtonImage("S2", "S2on", S2ImagePath);
            updateButtonImage("S3", "S3on", S3ImagePath);
            updateButtonImage("s3", "s3on", S3ImagePath);
            updateButtonImage("S4", "S4on", S4ImagePath);
            updateButtonImage("S5", "S5on", S5ImagePath);
            updateButtonImage("first_season_bd1080", "first_season_bd1080_on", firstSeasonBd1080Path);
            updateButtonImage("first_season_bd720", "first_season_bd720_on", firstSeasonBd720Path);
            updateButtonImage("second_season_bd1080", "second_season_bd1080_on", secondSeasonBd1080Path);
            updateButtonImage("second_season_bd720", "second_season_bd720_on", secondSeasonBd720Path);
            updateButtonImage("third_season_bd1080", "third_season_bd1080_on", thirdSeasonBd1080Path);
            updateButtonImage("third_season_bd720", "third_season_bd720_on", thirdSeasonBd720Path);
            updateButtonImage("fourth_season_bd1080", "fourth_season_bd1080_on", fourthSeasonBd1080Path);
            updateButtonImage("fourth_season_bd720", "fourth_season_bd720_on", fourthSeasonBd720Path);
            updateButtonImage("fifth_season_bd1080", "fifth_season_bd1080_on", fifthSeasonBd1080Path);
            updateButtonImage("fifth_season_bd720", "fifth_season_bd720_on", fifthSeasonBd720Path);
            updateButtonImage("sixth_season_bd1080", "sixth_season_bd1080_on", sixthSeasonBd1080Path);
            updateButtonImage("sixth_season_bd720", "sixth_season_bd720_on", sixthSeasonBd720Path);
            console.log("After updateButtonImage");
        }

        // Update the donation image if the anchor tag with class "donateImage" is present
        if ($('a.donateImage, p.donation img, a.pleaseImage, a.postMakerADonate').length) {
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

        // Update spoiler images if the class "spoilerContainer" is present
        var spoilerImageElements = $('.spoilerContainer img');
        if (spoilerImageElements.length) {
            updateSpoilerImages(postNumber);
        }
    }

    // Function to update spoiler images
    function updateSpoilerImages(postNumber) {
        // Spoiler image paths
        var spoiler1080Path = "https://raw.githubusercontent.com/xlordnoro/xlordnoro.github.io/master/button_images/" + postNumber + "/bd1080.jpg";
        var spoiler720Path = "https://raw.githubusercontent.com/xlordnoro/xlordnoro.github.io/master/button_images/" + postNumber + "/bd720.jpg";

        // Update spoiler images
        updateSpoilerImage("btnS1", spoiler1080Path);
        updateSpoilerImage("btnS2", spoiler720Path);
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
            $("a.donateImage img, p.donation img, a.pleaseImage img, a.postMakerADonate img").attr("src", donationImagePath);
            console.log("Donation image loaded successfully!");
        }, function (error) {
            // Handle the case when the donation image is not found
            console.log("Donation image not found:", error);
            // You can optionally add a placeholder URL here if needed
        });
    }

    // Function to update a spoiler image
    function updateSpoilerImage(buttonId, imagePath) {
        loadImage(imagePath, function () {
            // Set the source for the spoiler image
            $("#" + buttonId).attr("src", imagePath);
            console.log(buttonId + " image loaded successfully!");
        }, function (error) {
            // Handle the case when the spoiler image is not found
            console.log(buttonId + " image not found:", error);
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