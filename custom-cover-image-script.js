jQuery(document).ready(function ($) {
    function fixImgurLinks(img) {
        if ($(img).attr('src').includes('imgur.com') && !$(img).attr('src').includes('i.imgur.com')) {
            const newImgurURL = $(img).attr('src').replace('imgur.com', 'i.imgur.com');
            console.log(`Updating imgur URL for post ID: ${$(img).closest('[id^="post-"]').attr('id')} to ${newImgurURL}`);
            $(img).attr('src', newImgurURL);
        }
    }

    function handleImageError(img) {
        const postId = $(img).closest('[id^="post-"]').attr('id').split('-')[1];
        const fallbackURL = `https://raw.githubusercontent.com/xlordnoro/xlordnoro.github.io/master/cover_images/${postId}/cover.jpg`;

        if ($(img).attr('src') !== fallbackURL) {
            console.log(`Switching to fallback for post ID: ${postId}`);
            $(img).attr('src', fallbackURL);
            $(img).on('load', function () {
                console.log(`Fallback image loaded successfully from GitHub for post ID: ${postId}`);
            });
        } else {
            console.error(`Image failed to load from all sources for post ID: ${postId}`);
        }
    }

    $('#main .site-content article .coverImage img').each(function () {
        fixImgurLinks(this); // Fix imgur links proactively
        $(this).on('error', function () {
            handleImageError(this);
        }).on('load', function () {
            console.log(`Image loaded successfully: ${$(this).attr('src')}`);
        });
    });
});
