jQuery(function($) {
        var $keys = [];
        var $code = '71,82,73,76,76';
        var $original_src = $('#cover').attr('src');
        var $hidden_src = 'https://imgur.com/vSquuVh.jpg';
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
