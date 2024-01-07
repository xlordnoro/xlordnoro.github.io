# Disclaimer: This repository was created to streamline the css/js required for posts due to the recent wordpress update which is absolute shit xD

# Link to [image_scraper repo:](https://github.com/xlordnoro/image_scraper)

August 22, 2020 - Created the repository (index, slider, playcool's version, css styles, etc.)

March 11, 2021 - Added reverse_slider_code.js

May 13, 2021 - Added the three_button_styles.css and three_button_slider.js

May 20, 2021 - Added creep_keypress.js

Jan 9, 2022 - Added three_button_slider_movie.js

Jan 26, 2022 - Added comment.css to make the css code in the various tables easier to read. Probably won't add the js code unless I'm willing to grind it out which is pointless when it already works fine as is.

March 24, 2022 - Added creative_workshop.js & creative_workshop.css to accomodate J0my's banner contributions into the post.

April 9, 2022 - Added ssstylish.css for testing mass-post css modifications along with spicy_keydown.js and pervert_keydown.js for the BD's of season 2 for Arifureta.

April 18, 2022 - Added fancy_hover.css and nyaa_keydown.js to show a nice cat maid cover image on the otome game post.

April 23, 2022 - Added yuki_keydown.js to show a Christmas cover image on the Kakkou no Iinazuke post.

May 11, 2022 - Webhook test via discord channel.

September 17, 2022 - Added shuumatsu_no_harem_keydown.js to show a Christmas cover image on the Shuumatsu no Harem post.

September 22, 2022 - Added pansy_keydown.js & cosmos_keydown.js to show a Pansy and Cosmos cover image on the oresuki post.

September 27, 2022 - Removed the singular keydown .js files for arifureta & oresuki which were replaced with combined variants that contained both jquery functions inside them to reduce load times on posts and ease of use over all. The new filenames are arifureta_keydown.js & oresuki_keydown.js.

Continued - Added about_us.css & about_us.js files containing the external code needed for the about us post to function properly after the 5.0 update.

October 12, 2022 - Added flip_flapper_keydown.js to show an easter egg in the flip flappers post.

November 24, 2022 - Added senri_comment.css to fix the css issues with Senri's comment after altering the contents to show which dropped projects were taken by me and Playcool.

March 9, 2023 - Added luminous_witches_yuki_keydown.js to show an easter egg in the luminous witches post.

March 15, 2023 - Added futoku_no_guild_keydown.js to show an easter egg in the futoku no guild post.

December 14, 2023 - Added folders for cover_images, button_images, & donation_images. Dynamic_loading_xlordnoro.js is designed to handle dynamic loading of covers, buttons, and donation banners in all my posts since imgur is mass deleting old content. ~~Still need to add the extra cover images from the keydown.js files as those use imgur links to swap the cover images.~~ Did this later in the same day and modified all the keydown.js files to point to their new locations on the github repo instead of imgur. Seriously, fuck imgur with their random deleting bs.

December 18, 2023 - Added a link to the imager_scraper repo which handles all the automation tasks for extracting cover, button, and donation images from posts. **I also added Dynamic_loading_zeust.js which uses Zeust's posting format for the site.** 

December 18, 2023 Part 2 - Added all of Krome's cover and donation images to the repo.

December 24, 2023 - v.2.2-2.3.1 - Added Added J0my, Silverbullet's, K!ra's, and Kami's images to the repo. Heavily updated the new dynamic_loading_all.js to include more selectors for extracting various cover, button, and donation images within other posts on the site.

December 26, 2023 - v.2.3.2-2.4 - Added some of Playcool's images to the repo to test out some of his chaotic posts. Updated dynamic_loading_all.js to include several new button image selectors and image paths for fetching the required images from the repo.

December 27, 2023 - v2.4.1 - Replaced some of the covers using button images to test multiple cover functionality.

January 5, 2024 - v2.4.2 - Added a new function to dynamic_loading_all.js which allows the script to handle multiple cover images inside posts with the anchor coverImage class. I also added some test button images to fully validate the rest of the code.

January 6, 2024 - v2.5 - Added all of Zash's images to the repo. Expanded the dynamic_loading_all.js to include the new cover and donation image selectors which were in Zash's early posts. Might need to tweak the code if things aren't loading correctly.

v2.5.1 - Added some more cover and donation images that the scraper missed. Likely due to the regression issue which didn't appear until later in the scraping process.

v2.5.2 - I corrected dynamic_loading_all.js to load images with the new classes. I forgot that most of the older classes use img classes instead of a classes like modern posts, so finding "img" and then the "src" tags wouldn't work for those classes as they're img tags already. I also added the new donation image classes which were accidentally ommitted from the codebase.