jQuery(function($) {
    $('#1080').click(function(event) {
        event.preventDefault();
        $('#1080pane').slideDown();
        $('#720pane').hide();
        $('table.switcher a').css('background-color', '#C3C3C3');
        $('#1080').css('background-color', '#000000');
    });
    $('#720').click(function(event) {
        event.preventDefault();
        $('#1080pane').hide();
        $('#720pane').slideDown();
        $('table.switcher a').css('background-color', '#C3C3C3');
        $('#720').css('background-color', '#000000');
    });
    $('#720').css('background-color', '#000000');
    $('#1080pane').hide();
});

jQuery(function($) {
    $('.showLinksTable a:contains("DDL")').html(' <img src="https://i.imgur.com/UjCePGg.png" width="26" height="26" alt="DDL" title="Download Video File">');
    $('.showLinksTable a:contains("Torrent")').html(' <img src="https://i.imgur.com/rrIgVdY.png" width="26" height="26" alt="DDL" title="Download Torrent File">');
    $('.showLinksTable a:contains("Patch")').html(' <img src="https://i.imgur.com/vKTbgNA.png" width="26" height="26" alt="Patch" title="Download Patch File">');
    $('.batchLinksTable a:contains("Torrent")').html(' <img src="https://i.imgur.com/rrIgVdY.png" width="26" height="26" alt="Torrent" title="Download Batch Torrent">');
   });
