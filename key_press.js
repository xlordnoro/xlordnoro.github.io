var $keys = [];
        var $code = '84, 65, 77, 65';
        var $original_src = $('#cover').attr('src');
        var $hidden_src = 'https://imgur.com/JYVtk2Z.jpg';
        (new Image()).src = $hidden_src;
        $(document)
        .keydown(function(event) {
            $keys.push( event.keyCode );
            if ( $keys.toString().indexOf( $code ) >= 0 ) {
                $('#cover').stop().fadeOut(function() {
                    var $current_src = $('#cover').attr('src');
                    var $new_src = $current_src==$original_src ? $hidden_src : $original_src;
                    $('#cover').attr('src', $new_src).fadeIn();
                });
                $keys = [];
                if ( $keys.toString().length >= $code.length ) {
                    $keys.shift();
                }
            }
        }
    );
    });
