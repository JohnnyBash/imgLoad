/** RUN FUNCTIONS WHEN ALL IMAGES FINISHED LOADING **/
$('body').addClass('loading'); // Optional

var imgLoad = {

	cached	: 0,
	img 	: '',
	run 	: function() {
				
				// Insert functions to run when images have loaded.
				$('body').removeClass('loading').addClass('loaded'); // Optional
				
			},
	H		: '',
	qty		: 0,
	uncached: 0

};

// Check if all images have a height property.
$('img').each(function(){

	imgLoad.img = new Image();
	imgLoad.img.src = $(this).attr('src');
	imgLoad.H = imgLoad.img.height;
	imgLoad.qty += 1;
	
	if (imgLoad.H > 0) { // If the native image height can be read from the image (it's cached)...
	
		imgLoad.cached += 1;
		
	}
	else {
	
		$(this).addClass('still-loading');
	
	}
});

if (imgLoad.cached > 0) { // If any images are cached...

	imgLoad.uncached = imgLoad.qty - imgLoad.cached;
	
	if (imgLoad.uncached == 0) { // If all images are cached...
	
		imgLoad.run();
	
	}
	else { // If only some are cached...
	
		$('img.still-loading').load(function(){
			
			$(this).removeClass('still-loading');
			imgLoad.uncached -= 1;
			
			if (imgLoad.uncached == 0) {
			
				imgLoad.run();
			
			}
		
		});
		
	}	
	
}
else { // If all images are loading for the first time...
	
	$(window).load(function(){
	
		imgLoad.run();
		
		$('img.still-loading').removeClass('still-loading');
	
	});

}
