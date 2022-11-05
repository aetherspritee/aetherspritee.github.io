function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomImage() {
    path = '/home/yulivee/Dropbox/Wallpapers/IMG_'
    var num = randomNumber(1000, 1015);
    var img = path + num + '.JPG';
    return img;
}

document.addEventListener('DOMContentLoaded', (event) => {
    var gal = document.getElementById('img_sec');
    for(var i = 0; i < 4; i++){
	var img = document.createElement("img");
	img.src = getRandomImage();
	img.alt = "Random Aesthetic Picsture";
	gal.appendChild(img);
    }
});
