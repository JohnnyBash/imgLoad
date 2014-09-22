imgLoad
=======

Fire events when all the images in the document have loaded.
Requires jQuery.

Why Would You Use This?
=======================

In responsive design, it is hard to know how to specify the height of some containers until you know the true height-to-width ratios of images on the website. This is often due to the fact that the image widths and heights have not been loaded, and you cannot pull them into your Javascript on document ready (because some or all of the images aren't loaded when you run the JS). When events need to fire based on knowing the size of all the images on your web page, this script will allow you to do that. 

How it works:
=============

The script checks each IMG tag in the document and tries to read its native/real height.
The images that return zero for the native/real height haven't loaded, so the script waits for all the non-loaded images to load, and disregards all the cached images.

How to Use it:
==============

Just copy-paste this script into a document ready function, and read the code comments to modify the parameters.
