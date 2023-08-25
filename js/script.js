'use strict';

//========== для работы, удалить потом

const titles = document.querySelectorAll('.title');
for (let title of titles) {
	title.addEventListener('click', function() {
		alert(`ширина: ${document.documentElement.clientWidth} 
высота: ${document.documentElement.clientHeight}`);
	});
}