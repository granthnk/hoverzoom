// Copyright (c) 2010 Romain Vallet
// Licensed under the MIT license, read license.txt

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push( {
	"name": "Google",
	"version": "0.3",
	"prepareImgLinks": function() {
	
		function getSrc(link) {
			var imgUrlIndex = link.attr('href').indexOf('imgurl=');
			if (imgUrlIndex > -1) {
				return decodeURIComponent(link.attr('href').substring(imgUrlIndex + 7, link.attr('href').indexOf('&', imgUrlIndex)));		
			} else {
				return null;
			}
		}
		
		var links = $("#iur a[href], #ImgContent a[href]");
		var res = $();
		links.each(function() {
			if ($(this).attr('href')) {
				var src = getSrc($(this));
				if (src) {
					$(this).data('hoverZoomSrc', [src]);
					res = res.add($(this));
				}
			}
		});
		
		function rgHiOnLoad() {
			var src = getSrc($(this).parent());
			$('#rg_hta').addClass('hoverZoomLink').data('hoverZoomSrc', [src]).data('hoverZoomSrcIndex', 0);
		}		
		$('#rg_hi').load(rgHiOnLoad);
		
		return res;		
	}
});