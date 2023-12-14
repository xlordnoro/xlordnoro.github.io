jQuery(function($) {
        var $keys = [];
        var $code = '78,89,65,65';
        var $original_src = $('#cover').attr('src');
        var $hidden_src = 'https://raw.githubusercontent.com/xlordnoro/xlordnoro.github.io/master/cover_images/94259/nyaa.jpg';
        (new Image()).src = $hidden_src; // preload the hidden image
        $(document)
        .keydown(function(event) {
            $keys.push( event.keyCode );
            if ( $keys.toString().indexOf( $code ) >= 0 ) {
                // do something when the konami code is executed
                $('#cover').stop().fadeOut(function() {
                    var $current_src = $('#cover').attr('src');
                    var $new_src = $current_src==$original_src ? $hidden_src : $original_src;
                    $('#cover').attr('src', $new_src).fadeIn();
                });
                // empty the array containing the key sequence entered by the user
                $keys = [];
                // cache limiter
                if ( $keys.toString().length >= $code.length ) {
                    $keys.shift();
                }
            }
        }
    );
});

jQuery(function($) {
        var $keys = [];
        var $code = '83,80,73,67,89';
        var $original_src = $('#cover').attr('src');
        var $hidden_src = 'https://raw.githubusercontent.com/xlordnoro/xlordnoro.github.io/master/cover_images/94259/spicy.jpg';
        (new Image()).src = $hidden_src; // preload the hidden image
        $(document)
        .keydown(function(event) {
            $keys.push( event.keyCode );
            if ( $keys.toString().indexOf( $code ) >= 0 ) {
                // do something when the konami code is executed
                $('#cover').stop().fadeOut(function() {
                    var $current_src = $('#cover').attr('src');
                    var $new_src = $current_src==$original_src ? $hidden_src : $original_src;
                    $('#cover').attr('src', $new_src).fadeIn();
                });
                // empty the array containing the key sequence entered by the user
                $keys = [];
                // cache limiter
                if ( $keys.toString().length >= $code.length ) {
                    $keys.shift();
                }
            }
        }
    );
});
