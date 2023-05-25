window.addEventListener("wheel", introScroll);
let introHeading = document.querySelector(".intro-heading");
let introScale = 3;
function introScroll(e) {
	if (e.deltaY > 0) {
		introScale -= .05;
		introHeading.style.transform = `scale(${introScale})`;
	} else if (e.deltaY < 0) {
	}

	if (introScale <= 1) {
		window.removeEventListener("wheel", introScroll);
		let introParagraphs = document.querySelectorAll(".intro-paragraph");
		for (let introParagraph of introParagraphs) {
			introParagraph.style.display = "block";
			setTimeout(() => {introParagraph.style.opacity = 1;}, 50);
		}
		document.querySelector(".intro-start").style.display = "block";
		setTimeout(() => {document.querySelector(".intro-start").style.opacity = 1;}, 50);
	}
}

function start() {
	// Transition elements
	let intro = document.querySelector(".intro");
	intro.style.opacity = 0;
	intro.style.pointerEvents = "none";
	let main = document.querySelector("main");
	main.style.opacity = 1;
	setTimeout(() => {
		let info = document.querySelector(".info");
		info.style.opacity = 1;
	}, 2500)
	setTimeout(() => {
		let drawing = document.querySelector(".drawing");
		drawing.style.opacity = 1;
	}, 5000)
	setTimeout(() => {
		let navLinks = document.querySelectorAll(".nav-link");
		for (let navLink of navLinks) {
			navLink.style.opacity = 1;
			navLink.style.pointerEvents = "all";
		}
	}, 7500)
	main.style.pointerEvents = "all";

	// Check which element is onscreen
	window.addEventListener("wheel", checkVisible);
}

let details = {
	"nettle": ["Collaborator: Nettle Leaves", "Speed: 5.4–6.3 MPH", "Time: 2 seconds"],
	"dandelions": ["Collaborator: Dandelions", "Speed: 5.1–5.8 MPH", "Time: 3 seconds"],
	"redadler": ["Collaborator: Red Alder", "Speed: 8.2–12.5 MPH", "Time: .5 seconds"],
	"singlebranch": ["Collaborator: A single branch", "Speed: 12.8–15.4 MPH", "Time: 1 second"],
	"greenash": ["Collaborator: Green Ash", "Speed: 5.8 MPH", "Time: 2 seconds"],
}

let infoSpeed = document.querySelector(".info-speed");
let infoDuration = document.querySelector(".info-duration");
let infoDesc = document.querySelector(".info-desc");
let drawing = document.querySelector(".drawing");
let offset = 500;
function checkVisible() {
	for (let mainVideo of document.querySelectorAll(".main-video")) {
		let rect = mainVideo.getBoundingClientRect();
		let viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
		if (!(rect.bottom + offset < 0 || rect.top - viewHeight + offset >= 0)) {
			let videoNumber = mainVideo.dataset.video;
			drawing.style.backgroundImage = `url("assets/drawings/${videoNumber}.png")`
			infoSpeed.innerText = details[videoNumber][0];
			infoDuration.innerText = details[videoNumber][1];
			infoDesc.innerText = details[videoNumber][2];
		}
	}
  }
  