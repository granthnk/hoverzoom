// Copyright (c) 2010 Romain Vallet
// Licensed under the MIT license, read license.txt

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push( {
	name: 'Ravelry',
	version: '0.1',
	prepareImgLinks: function(callback) {
		var res = [];

		hoverZoom.urlReplace(res, 
			'.thumbnail, .zoomable_photo, .photo',
			['_small', '_best_fit', /_[mst]\./],
			['', '', '.']
		);			
		
		hoverZoom.urlReplace(res, 
			'a img',
			'_square.',
			'.'
		);	
		
		callback($(res));
		
		// This second processing makes use of the Flickr API to try to get larger pictures.
		$('a img[src*=static.flickr.com]').each(function() {
			var _this = $(this),
				link = _this.parents('a:eq(0)'),
				src = _this.attr('src');
			hoverZoomPluginFlickerA.prepareImgLinkFromSrc(link, src, callback);
		});
		
	}
});