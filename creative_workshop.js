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
    SpoilerHelper.create(['S1', 'S2', 'S3', 'S4', 'S5']);
    $('.showLinksTable a:contains("DDL")').html(' <img src="https://i.imgur.com/UjCePGg.png" width="26" height="26" alt="DDL" title="Download Video File">');
    $('.showLinksTable a:contains("Torrent")').html(' <img src="https://i.imgur.com/LTt0o2e.png" width="26" height="26" alt="Torrent" title="Download Batch Torrent">');
    $('.batchLinksTable a:contains("Torrent")').html(' <img src="https://i.imgur.com/LTt0o2e.png" width="26" height="26" alt="Torrent" title="Download Batch Torrent">');
    $('.batchLinksTable a:contains("MEGA")').html(' <img src="https://i.imgur.com/FTBMWvp.png" width="26" height="26" alt="MEGA" title="Download Files From MEGA">');
    $('.batchLinksTable a:contains("RAR")').html(' <img src="https://i.imgur.com/fobS18j.png" width="26" height="26" alt="RAR" title="Download Files From RAR">');
    $('.batchLinksTable a:contains("PATCH")').html(' <img src="https://i.imgur.com/Lc1Y4Ap.png" width="26" height="26" alt="RAR" title="Download Files For PATCH">');
});
