function gallery(sSelector) {
	var g = this;
	
	// 2. Logic ===================
	g._drawGallery = function (){
		for (var i = 0; i < data.length; i++) {
			$("<img src='" + data[i].linkToSmallImg + "' alt='" + data[i].id + "' class='gallery__item'" + ">").appendTo(g.gallery);
		}
		return $('.gallery__item');
	}
	g.showPreview = function () {
		var jqPicture = $(this);
		g.current = g.pictures.index(jqPicture);
		g.showImage(gallery.GALLERY_NO_STEP);
		g.preview.addClass('preview_shown');
	}
	g.hidePreview = function (event) {
		if ($(event.target).hasClass('preview')) {
			g.preview.removeClass('preview_shown');
		}
	}
	g.showImage = function (iStep) {
		g.current += iStep;
		if (g.current > g.pictures.length-1) {
			g.current = 0
		}		
		else if (g.current < 0) {
			g.current = g.pictures.length-1
		};	
		var jqPicture = g.pictures.eq(g.current),
		sSmallImagePath	= jqPicture.attr('src'),
		sBigImagePath = sSmallImagePath.replace('small/', 'fullsize/');
		g.previewImage.attr('src', sBigImagePath);
	}
	g.showPrevious = function () {
		g.showImage(gallery.GALLERY_PREV);
	}
	g.showNext = function () {
		g.showImage(gallery.GALLERY_NEXT);
	}
	g.main = function (event) {
		// 1. Data ====================
		g.gallery = $(sSelector);
		g.preview = g.gallery.find('.preview');
		g.previewImage = g.gallery.find('.preview__image');
		g.arrowPrev = g.gallery.find('.preview__arrow_prev');
		g.arrowNext = g.gallery.find('.preview__arrow_next');
		g.pictures = g._drawGallery();
		g.current = 0;

		// 3. Events ==================
		g.pictures.click(g.showPreview);
		g.preview.click(g.hidePreview);
		g.arrowPrev.click(g.showPrevious);
		g.arrowNext.click(g.showNext);
	}
	$(document).ready(g.main);
}
gallery.GALLERY_PREV = -1;
gallery.GALLERY_NEXT = +1;
gallery.GALLERY_NO_STEP = 0;