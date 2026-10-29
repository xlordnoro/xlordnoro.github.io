
/**
 * Creates falling Halloween particles across the page.
 * Requires jQuery and an element with id="halloween-container".
 */
jQuery(function ($) {
    const $container = $('#halloween-container');

    if (!$container.length) {
        return;
    }

    // Mix of Halloween-themed symbols.
    const halloweenSymbols = [
        '🦇', // Bat
        '👻', // Ghost
        '🎃', // Pumpkin
        '🕸️', // Spider web
        '🍂', // Autumn leaf
        '🕷️'  // Spider
    ];

    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const symbol = halloweenSymbols[
            Math.floor(Math.random() * halloweenSymbols.length)
        ];

        const $particle = $('<div class="halloween-particle"></div>');

        $particle.text(symbol);

        const size = Math.random() * 12 + 10; // 10px–22px
        const duration = Math.random() * 10 + 8; // 8–18 seconds

        $particle.css({
            fontSize: `${size}px`,
            left: `${Math.random() * 100}vw`,
            animationDelay: `${Math.random() * duration}s`,
            animationDuration: `${duration}s`,
            opacity: Math.random() * 0.4 + 0.4
        });

        $container.append($particle);
    }
});
