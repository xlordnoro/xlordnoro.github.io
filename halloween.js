jQuery(function ($) {
    const $container = $('#halloween-container');

    // Halloween icons to randomly display.
    const halloweenIcons = ['🎃', '👻', '🦇', '🕷️', '🍂'];

    for (let i = 0; i < 50; i++) {
        const icon = halloweenIcons[
            Math.floor(Math.random() * halloweenIcons.length)
        ];

        const $particle = $('<div class="halloween-particle"></div>');

        // Set a random Halloween icon.
        $particle.text(icon);

        const size = Math.random() * 10 + 5; // Random size between 5px and 15px

        $particle.css({
            fontSize: `${size}px`,
            left: `${Math.random() * 100}vw`,
                      animationDelay: `${Math.random() * 10}s`,
                      animationDuration: `${Math.random() * 10 + 5}s`,
        });

        $container.append($particle);
    }
});
