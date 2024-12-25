// Causes snowflakes to fall down onto a given post.
jQuery(function ($) {
    const $container = $('#snow-container');
    for (let i = 0; i < 50; i++) {
        const $snowflake = $('<div class="snowflake"></div>');
        const size = Math.random() * 10 + 5; // Random size between 5px and 15px
        $snowflake.css({
            fontSize: `${size}px`,
            left: `${Math.random() * 100}vw`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${Math.random() * 10 + 5}s`,
        });
        $container.append($snowflake);
    }
});
