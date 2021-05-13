jQuery(function($) {
        function show_bd1080() {
            $('#bd720pane').hide();
            $('#moviepane').hide();
            $('#bd1080on').fadeTo('fast', 1);
            $('#bd720on').fadeTo('fast', 0.4);
            $('#movieon').fadeTo('fast', 0.4);
            $('#bd1080pane').slideDown('slow', function() {
            });
        }
        function show_bd720() {
            $('#bd1080pane').hide();
            $('#moviepane').hide();
            $('#bd1080on').fadeTo('fast', 0.4);
            $('#movieon').fadeTo('fast', 0.4);
            $('#bd720on').fadeTo('fast', 1.0);
            $('#bd720pane').slideDown('slow', function() {
            });
        }
        function show_movie() {
            $('#bd1080pane').hide();
            $('#bd720pane').hide();
            $('#bd1080on').fadeTo('fast', 0.4);
            $('#bd720on').fadeTo('fast', 0.4);
            $('#movieon').fadeTo('fast', 1.0);
            $('#moviepane').slideDown('slow', function() {
            });
        }
        $('#bd1080').click(function(event) {
            event.preventDefault();
            show_bd1080();
        });
        $('#bd720').click(function(event) {
            event.preventDefault();
            show_bd720();
        });
        $('#movie').click(function(event) {
            event.preventDefault();
            show_movie();
        });
        show_bd1080();
    });
