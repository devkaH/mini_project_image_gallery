var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');


for (var i = 1; i < 6; i++) {
	


	var newImage = document.createElement('img');
	nameImg='images/pic'+i+'.jpg';
	newImage.setAttribute('src',nameImg );
	thumbBar.appendChild(newImage);

	newImage.onclick = function(event) {
		displayedImage.setAttribute('src', event.target.src);
	};	
}
btn.onclick = function(){
var classELt=btn.getAttribute('class');
if (classELt==='light') {
	btn.setAttribute('class', 'dark');
	btn.textContent = "Darken";
	overlay.setAttribute('class', 'overlay dark')
} else  {
	btn.setAttribute('class', 'light');
	btn.textContent = "lighten";
	overlay.setAttribute('class', 'overlay')

}

}