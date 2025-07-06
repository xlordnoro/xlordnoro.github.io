jQuery(function($) {
    function updateMonthWidget() {
      const months = [
        "Jan", "Feb", "March", "April",
        "May", "June", "July", "August",
        "Sept", "Oct", "Nov", "Dec"
      ];

      const currentDate = new Date();
      const currentMonth = months[currentDate.getMonth()];
      const currentYear = currentDate.getFullYear();

      const dateInfo = $("#date-info2");
      dateInfo.html(`${currentMonth}, ${currentYear}`);
    }

    // Call the function initially
    updateMonthWidget();
  });