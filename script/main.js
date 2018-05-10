function Gallery(gallery, galleryList) {
	this.gallery = gallery;
	this.galleryList = galleryList;

	this.drawItems(this.gallery, this.galleryList);
}
Gallery.prototype.drawItems = function (galleryItemTargetNode, galleryList) {
	console.log('log_message', galleryItemTargetNode, galleryList);

	for (var i = 0; i < galleryList.length; i++) {
		var galleryItem = document.createElement('div');
		galleryItem.className = "gallery__item work";

		var galleryItemImg = document.createElement('img');
		galleryItemImg.className = "work__img";
		galleryItemImg.src = galleryList[i].previewImage;
		galleryItemImg.alt = galleryList[i].id;
		galleryItem.appendChild(galleryItemImg);

		var galleryItemTitle = document.createElement('h5');
		galleryItemTitle.className = "work__title";
		galleryItemTitle.innerHTML = galleryList[i].title;
		galleryItem.appendChild(galleryItemTitle);

		var galleryItemDescription = document.createElement('p');
		galleryItemDescription.className = "work__description";
		galleryItemDescription.innerHTML = galleryList[i].description;
		galleryItem.appendChild(galleryItemDescription);

		var galleryItemLinkToCode = document.createElement('a');
		galleryItemLinkToCode.className = "work__link";
		galleryItemLinkToCode.href = galleryList[i].linkToCode;
		galleryItemLinkToCode.innerHTML = "code"
		galleryItem.appendChild(galleryItemLinkToCode);

		var galleryItemLinkToDemo = document.createElement('a');
		galleryItemLinkToDemo.className = "work__link";
		galleryItemLinkToDemo.href = galleryList[i].linkToDemo;
		galleryItemLinkToDemo.innerHTML = "demo";
		galleryItem.appendChild(galleryItemLinkToDemo);

		galleryItemTargetNode.appendChild(galleryItem);
	}	
	return galleryItemTargetNode;
}
window.gallery1 = new Gallery(document.getElementsByClassName('gallery')[0], data);