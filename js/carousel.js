img = 1000000
imgs = ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
"https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1520x800.png",
"https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q="]

document.querySelector(".left-btn").addEventListener("click", move(-1))
document.querySelector(".left-btn").addEventListener("click", move(1))

function move(num) {
	img = (img + num + imgs.length * 10000) % imgs.length
	document.querySelector(".carousel").style.backgroundImage = `url(${imgs[img]})`
}

function tp(num) {
	img = (num + imgs.length * 10000) % imgs.length
	document.querySelector(".carousel").style.backgroundImage = `url(${imgs[img]})`
}


function updateTps() {
	for (var i = 0; i < imgs.length; i++) {
		if (img%3 == i) {
			document.getElementsByClassName("tp")[i].style.opacity = 0.7
			document.getElementsByClassName("tp")[i].style.transform = "scale(1.3, 1.3)"
			document.getElementsByClassName("tp")[i].style.transition= "0.2s ease-in-out"
		}
		if (img%3 != i) {
			document.getElementsByClassName("tp")[i].style.opacity = 0.3
			document.getElementsByClassName("tp")[i].style.transform = "scale(1, 1)"
			document.getElementsByClassName("tp")[i].style.transition= "0.15s"
		}
	}
}

const test = setInterval(() => move(1), 5000)
const test2 = setInterval(() => updateTps(), 10)