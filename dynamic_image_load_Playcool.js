jQuery(function($) {
        // Function to update the image source based on the img title
        function updateImage() {
            // Get the current img title from the img tag
            var imgTitle = $("#tabImage").attr("title");

            // If the title is empty, do nothing
            if (!imgTitle) {
                return;
            }

            // Replace spaces and special characters to create a valid image filename
            var imageName = imgTitle.replace(/[^a-zA-Z0-9 ]/g, "_");

            // Set the image source based on the generated filenames for JPG and PNG formats in the same folder
            var imagePathJPG = "https://raw.githubusercontent.com/xlordnoro/xlordnoro.github.io/master/covers/" + imageName + ".jpg";
            var imagePathPNG = "https://raw.githubusercontent.com/xlordnoro/xlordnoro.github.io/master/covers/" + imageName + ".png";

            // Try loading the image with the JPG extension first, then fallback to PNG if not found
            loadImage(imagePathJPG, function () {
                $("#tabImage").attr("src", imagePathJPG);
            }, function () {
                $("#tabImage").attr("src", imagePathPNG);
            });
        }

        // Call the updateImage function initially
        updateImage();

        // Helper function to check if an image exists and execute callbacks accordingly
        function loadImage(src, successCallback, errorCallback) {
            var img = new Image();
            img.onload = successCallback;
            img.onerror = errorCallback;
            img.src = src;
        }
    });
