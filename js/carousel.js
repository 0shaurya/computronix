img = 1000000
imgs = ["https://lh3.googleusercontent.com/p/AF1QipO-tihQkWykISqqqqUu3tKrBzotNy2C9Mj_INZ0=s0",
"https://lh3.googleusercontent.com/p/AF1QipPDsCWaQh-OFVoGhO9HV3cdDpX9_fmOZygUyyX8=s0",
"https://lh3.ggpht.com/p/AF1QipNNIN3RZAQk2kKi5F_mgwEfGIioeb_pVnz-UytC=s1536"]

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
