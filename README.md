imgLoad
=======

Allows you to fire events once all the images in the document have loaded.
Requires jQuery.

How it works:
=============

The script checks each IMG tag in the document and tries to read its native/real height.
The assumption is that if the image is cached, that you will immediately be able to read it's native/real height (on document.ready() ).
The images that return zero for the native/real height are obviously still loading, so the script waits for all the non-loaded images to load, and disregards all the cached images.


