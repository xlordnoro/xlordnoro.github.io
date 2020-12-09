var $keys = [];<br />
        var $code = '84,65,77,65';<br />
        var $original_src = $('#cover').attr('src');<br />
        var $hidden_src = 'https://imgur.com/JYVtk2Z.jpg';<br />
        (new Image()).src = $hidden_src; // preload the hidden image<br />
        $(document)<br />
        .keydown(function(event) {<br />
            $keys.push( event.keyCode );<br />
            if ( $keys.toString().indexOf( $code ) >= 0 ) {<br />
                // do something when the konami code is executed<br />
                $('#cover').stop().fadeOut(function() {<br />
                    var $current_src = $('#cover').attr('src');<br />
                    var $new_src = $current_src==$original_src ? $hidden_src : $original_src;<br />
                    $('#cover').attr('src', $new_src).fadeIn();<br />
                });<br />
                // empty the array containing the key sequence entered by the user<br />
                $keys = [];<br />
                // cache limiter<br />
                if ( $keys.toString().length >= $code.length ) {<br />
                    $keys.shift();<br />
                }<br />
            }<br />
        }<br />
    );<br />
    });<br />
