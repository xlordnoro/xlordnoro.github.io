jQuery(function($) {
	function show_bd720() {
        $('#bd1080pane').hide();
        $('#bd1080on').fadeTo('fast', 0.4);
        $('#bd720on').fadeTo('fast', 1.0);
        $('#bd720pane').slideDown('slow', function() {
        });
    }
    function show_bd1080() {
        $('#bd720pane').hide();
        $('#bd1080on').fadeTo('fast', 1);
        $('#bd720on').fadeTo('fast', 0.4);
        $('#bd1080pane').slideDown('slow', function() {
        });
    }
    $('#bd720').click(function(event) {
        event.preventDefault();
        show_bd720();
    });
    $('#bd1080').click(function(event) {
        event.preventDefault();
        show_bd1080();
    });
    show_bd1080();
});

    jQuery(function($) {
        function show_fourth_season_bd720() {
            $('#fourth_season_bd1080pane').hide();
            $('#fourth_season_bd1080on').fadeTo('fast', 0.4);
            $('#fourth_season_bd720on').fadeTo('fast', 1.0);
            $('#fourth_season_bd720pane').slideDown('slow', function() {
            });
        }
        function show_fourth_season_bd1080() {
            $('#fourth_season_bd720pane').hide();
            $('#fourth_season_bd1080on').fadeTo('fast', 1);
            $('#fourth_season_bd720on').fadeTo('fast', 0.4);
            $('#fourth_season_bd1080pane').slideDown('slow', function() {
            });
        }
        $('#fourth_season_bd720').click(function(event) {
            event.preventDefault();
            show_fourth_season_bd720();
        });
        $('#fourth_season_bd1080').click(function(event) {
            event.preventDefault();
            show_fourth_season_bd1080();
        });
        function show_third_season_bd720() {
            $('#third_season_bd1080pane').hide();
            $('#third_season_bd1080on').fadeTo('fast', 0.4);
            $('#third_season_bd720on').fadeTo('fast', 1.0);
            $('#third_season_bd720pane').slideDown('slow', function() {
            });
        }
        function show_third_season_bd1080() {
            $('#third_season_bd720pane').hide();
            $('#third_season_bd1080on').fadeTo('fast', 1);
            $('#third_season_bd720on').fadeTo('fast', 0.4);
            $('#third_season_bd1080pane').slideDown('slow', function() {
            });
        }
        $('#third_season_bd720').click(function(event) {
            event.preventDefault();
            show_third_season_bd720();
        });
        $('#third_season_bd1080').click(function(event) {
            event.preventDefault();
            show_third_season_bd1080();
        });
        function show_second_season_bd720() {
            $('#second_season_bd1080pane').hide();
            $('#second_season_bd1080on').fadeTo('fast', 0.4);
            $('#second_season_bd720on').fadeTo('fast', 1.0);
            $('#second_season_bd720pane').slideDown('slow', function() {
            });
        }
        function show_second_season_bd1080() {
            $('#second_season_bd720pane').hide();
            $('#second_season_bd1080on').fadeTo('fast', 1);
            $('#second_season_bd720on').fadeTo('fast', 0.4);
            $('#second_season_bd1080pane').slideDown('slow', function() {
            });
        }
        $('#second_season_bd720').click(function(event) {
            event.preventDefault();
            show_second_season_bd720();
        });
        $('#second_season_bd1080').click(function(event) {
            event.preventDefault();
            show_second_season_bd1080();
        });
        function show_first_season_bd720() {
            $('#first_season_bd1080pane').hide();
            $('#first_season_bd1080on').fadeTo('fast', 0.4);
            $('#first_season_bd720on').fadeTo('fast', 1.0);
            $('#first_season_bd720pane').slideDown('slow', function() {
            });
        }
        function show_first_season_bd1080() {
            $('#first_season_bd720pane').hide();
            $('#first_season_bd1080on').fadeTo('fast', 1);
            $('#first_season_bd720on').fadeTo('fast', 0.4);
            $('#first_season_bd1080pane').slideDown('slow', function() {
            });
        }
        $('#first_season_bd720').click(function(event) {
            event.preventDefault();
            show_first_season_bd720();
        });
        $('#first_season_bd1080').click(function(event) {
            event.preventDefault();
            show_first_season_bd1080();
        });
        show_first_season_bd1080();
        show_second_season_bd1080();
        show_third_season_bd1080();
        show_fourth_season_bd1080();
    });
