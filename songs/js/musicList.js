var btnSelectCate = my$('btnSelectCate');
var cateList = my$('cateList');
btnSelectCate.onclick = function(e) {
	var evt = e || window.event;
	if (getStyle(cateList,'display') === 'none') {
		cateList.style.display = 'block';
	} else {
		cateList.style.display = 'none';
	}
	if (evt.stopPropagation) {
		evt.stopPropagation();
	} else {
		evt.cancelBubble = true;
	}
}

document.body.onclick = function() {
	cateList.style.display = 'none';
}