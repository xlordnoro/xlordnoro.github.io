jQuery(function($) {
    // ==== ID Formatting ====
    // Base ID: 1080
    // Link ID: btn1080
    // Pane ID: pane1080
    var SpoilerHelper = {
        create: function (nameArray) {
            $.each(nameArray, function (x, baseID) {
                // initialization
                if (x !== 0) {
                    $('#btn' + baseID).fadeTo(0, 0.4);
                    $('#pane' + baseID).hide();
                }
                // event handling
                $('#btn' + baseID).click(function (event) {
                    event.preventDefault();
                    $.each(nameArray, function (y, currID) {
                        if ($('#pane' + currID).is(':visible')) {
                            $('#btn' + currID).fadeTo('fast', 0.4, function () {
                                $('#btn' + baseID).fadeTo('fast', 1.0);
                            });
                            $('#pane' + currID).fadeOut('medium', function () {
                                $('#pane' + baseID).slideDown('slow');
                            });
                            return false;
                        }
                    });
                });
            });
        }
    };
    SpoilerHelper.create(['S1', 'S2', 'S3']);
    $('.InfoTable a:contains("CHAT")').html('<center><img src="https://i.imgur.com/Lz6Q077.png" width="24" height="24" alt="CHAT" title="Click to PM me!"></center>');
    $('.InfoTable a:contains("MAIL")').html('<center><img src="https://i.imgur.com/K2UziEF.png" width="24" height="24" alt="MAIL" title="Mail!"></center>');
    $('.InfoTable a:contains("LINK")').html('<center><img src="https://i.imgur.com/swaDMRj.png" width="24" height="24" alt="LINK" title="Link"></center>');
    $('.InfoTable a:contains("FACE")').html('<center><img src="https://i.imgur.com/IhmnMXj.png" width="24" height="24" alt="FACE" title="Facebook"></center>');
});
