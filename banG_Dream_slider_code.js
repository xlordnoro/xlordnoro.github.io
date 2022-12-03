jQuery(function($) {
    function show_S1() {
        $('#S2pane').hide();
        $('#S3pane').hide();
        $('#moviepane').hide();
        $('#specialspane').hide();
        $('#S1on').fadeTo('fast', 1);
        $('#S2on').fadeTo('fast', 0.4);
        $('#S3on').fadeTo('fast', 0.4);
        $('#movieon').fadeTo('fast', 0.4);
        $('#specialson').fadeTo('fast', 0.4);
        $('#S1pane').slideDown('slow', function() {
        });
    }
    function show_S2() {
        $('#S1pane').hide();
        $('#S3pane').hide();
        $('#moviepane').hide();
        $('#specialspane').hide();
        $('#S1on').fadeTo('fast', 0.4);
        $('#S2on').fadeTo('fast', 1.0);
        $('#S3on').fadeTo('fast', 0.4);
        $('#movieon').fadeTo('fast', 0.4);
        $('#specialson').fadeTo('fast', 0.4);
        $('#S2pane').slideDown('slow', function() {
        });
    }
    function show_S3() {
        $('#S1pane').hide();
        $('#S2pane').hide();
        $('#moviepane').hide();
        $('#specialspane').hide();
        $('#S1on').fadeTo('fast', 0.4);
        $('#S2on').fadeTo('fast', 0.4);
        $('#S3on').fadeTo('fast', 1.0);
        $('#movieon').fadeTo('fast', 0.4);
        $('#specialson').fadeTo('fast', 0.4);
        $('#S3pane').slideDown('slow', function() {
        });
    }
    function show_movie() {
        $('#S1pane').hide();
        $('#S2pane').hide();
        $('#S3pane').hide();
        $('#specialspane').hide();
        $('#S1on').fadeTo('fast', 0.4);
        $('#S2on').fadeTo('fast', 0.4);
        $('#S3on').fadeTo('fast', 0.4);
        $('#specialson').fadeTo('fast', 0.4);
        $('#movieon').fadeTo('fast', 1.0);
        $('#moviepane').slideDown('slow', function() {
        });
    }
    function show_specials() {
        $('#S1pane').hide();
        $('#S2pane').hide();
        $('#S3pane').hide();
        $('#moviepane').hide();
        $('#S1on').fadeTo('fast', 0.4);
        $('#S2on').fadeTo('fast', 0.4);
        $('#S3on').fadeTo('fast', 0.4);
        $('#movieon').fadeTo('fast', 0.4);
        $('#specialson').fadeTo('fast', 1.0);
        $('#specialspane').slideDown('slow', function() {
        });
    }
    $('#S1').click(function(event) {
        event.preventDefault();
        show_S1();
    });
    $('#S2').click(function(event) {
        event.preventDefault();
        show_S2();
    });
    $('#S3').click(function(event) {
        event.preventDefault();
        show_S3();
    });
    show_S3();
    $('#movie').click(function(event) {
        event.preventDefault();
        show_movie();
    });
$('#specials').click(function(event) {
        event.preventDefault();
        show_specials();
    });
    show_S1();
});
