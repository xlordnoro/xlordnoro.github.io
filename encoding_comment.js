// <![CDATA[
    jQuery(function($) {
        function show_ongoing_projects_bd1080on() {
            $('#Current/planned BD projects').hide();
            $('#future_Projects').hide();
            $('#completed_TV_Projects').hide();
            $('#ongoing_Projects_bd1080on').fadeTo('fast', 1);
            $('#Current/planned BD projects_bd1080on').fadeTo('fast', 0.4);
            $('#future_Projects_bd1080on').fadeTo('fast', 0.4);
            $('#completed_TV_Projects_bd1080on').fadeTo('fast', 0.4);
            $('#ongoing_Projects_bd1080').slideDown('slow');
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
        $('#ongoing_Projects_bd1080').click(function(event) {
            event.preventDefault();
            show_ongoing_projects_bd1080on();
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
// ]]>
