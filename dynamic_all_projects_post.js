jQuery(function ($) {
    // URL to the raw content of formattedPostUrls_sorted.txt on GitHub
    const githubRawUrl = 'https://raw.githubusercontent.com/xlordnoro/xlordnoro.github.io/master/formattedPostUrls_sorted.txt';

    // Fetch the content of the file
    $.get(githubRawUrl, function (data) {
      // Split the content into an array of lines
      const urls = data.split('\n');

      // Iterate through the URLs and do something with them (e.g., append to a container)
      const container = $('#urlContainer'); // Change this to the actual container ID or selector
      urls.forEach(function (url) {
        // Do something with each URL, for example, append it to a container
        container.append(url + '<br>');
      });
    });
  });