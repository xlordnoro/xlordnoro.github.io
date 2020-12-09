jQuery(function($) {
        function show_bd1080() {
            $('#bd720pane').hide();
            $('#bd1080on').fadeTo('fast', 1);
            $('#bd720on').fadeTo('fast', 0.4);
            $('#bd1080pane').slideDown('slow');
        }
        function show_bd720() {
            $('#bd1080pane').hide();
            $('#bd1080on').fadeTo('fast', 0.4);
            $('#bd720on').fadeTo('fast', 1.0);
            $('#bd720pane').slideDown('slow');
        }
        $('#bd1080on').click(function(event) {
            event.preventDefault();
            show_bd1080();
        });
        $('#bd720on').click(function(event) {
            event.preventDefault();
            show_bd720();
        });
        show_bd1080();
    });