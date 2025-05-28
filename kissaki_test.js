jQuery(function($) {
    function toggleDisplayNone(id) {
        const el = document.getElementById(id);
        el.style.display = el.style.display == 'none' ? '' : 'none';
    }

    $('.alt-options').on('click', (ev) => {
        const altOption = ev.target;
        const blockId = altOption.dataset.blockid;
        const altId = altOption.dataset.altid;

        $(altOption).fadeTo('fast', 1.0);
        $(altOption).siblings().fadeTo('fast', 0.4);

        $(`#blockbody-${blockId} .altpane`).hide();
        $(`#blockbody-${blockId} #${altId}pane`).slideDown('slow');
    });

    $('.alt-options > *:first-child').click();
});
