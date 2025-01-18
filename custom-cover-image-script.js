jQuery(document).ready(function ($) {
    function handleImageLoadSequence(img) {
        const postId = $(img).closest('[id^="post-"]').attr('id').split('-')[1]; 
        const githubURL = `https://raw.githubusercontent.com/xlordnoro/xlordnoro.github.io/master/cover_images/${postId}/cover.jpg`;
        const imgurFallbackURL = `https://i.imgur.com/${$(img).attr('src').split('/').pop()}`;
        
        console.log(`Attempting to load GitHub image for post ID: ${postId}`);
        $(img).attr('src', githubURL)
            .on('load', function () {
                console.log(`GitHub image loaded successfully for post ID: ${postId}`);
            })
            .on('error', function () {
                console.warn(`GitHub image not found for post ID: ${postId}. Falling back to Imgur.`);
                $(img).attr('src', imgurFallbackURL)
                    .on('load', function () {
                        console.log(`Imgur fallback image loaded successfully for post ID: ${postId}`);
                    })
                    .on('error', function () {
                        console.error(`Image failed to load from both GitHub and Imgur for post ID: ${postId}`);
                    });
            });
    }

    // Apply the logic to all images in the specified container
    $('#main .site-content article .coverImage img').each(function () {
        handleImageLoadSequence(this);
    });
});
