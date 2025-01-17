        jQuery(function ($) {
            function handleImageError(img) {
                const postId = $(img).closest('[id^="post-"]').attr('id').split('-')[1]; // Extract post ID
                const fallbackURL = `https://raw.githubusercontent.com/xlordnoro/xlordnoro.github.io/master/cover_images/${postId}/cover.jpg`;
                if ($(img).attr('src') !== fallbackURL) {
                    $(img).attr('src', fallbackURL);

                    // Log the loading of fallback image
                    $(img).on('load', function () {
                        console.log(`Fallback image loaded successfully from GitHub repository for post ID: ${postId}`);
                    });
                } else {
                    console.error(`Image failed to load from both original and fallback sources for post ID: ${postId}`);
                }
            }

            // Attach error handling to all images with the coverImage class
            $('.coverImage img').each(function () {
                $(this).on('error', function () {
                    handleImageError(this);
                }).on('load', function () {
                    console.log(`Cover image loaded successfully: ${$(this).attr('src')}`);
                });
            });
        });
