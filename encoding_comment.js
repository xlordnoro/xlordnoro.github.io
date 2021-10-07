jQuery(function($) {
        function show_ongoing_projects() {
            $('#Current/planned BD projects').hide();
            $('#future_Projects').hide();
            $('#completed_TV_Projects').hide();
            $('#ongoing_Projects').fadeTo('fast', 1);
            $('#ongoing_Projects').slideDown('fast');
        }
        function show_bd720() {
            $('#bd1080pane').hide();
            $('#bd1080on').fadeTo('fast', 0.4);
            $('#bd720on').fadeTo('fast', 1.0);
            $('#bd720pane').slideDown('slow');
        }
        $('#ongoing_Projects').click(function(event) {
            event.preventDefault();
            show_ongoing_projects();
        });
        $('#bd720on').click(function(event) {
            event.preventDefault();
            show_bd720();
        });
        show_ongoing_projects();
    });
