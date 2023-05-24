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
	let navLinks = document.querySelectorAll(".nav-link");
	for (let navLink of navLinks) {
		navLink.style.opacity = 1;
		navLink.style.pointerEvents = "all";
	}
	let main = document.querySelector("main");
	main.style.opacity = 1;
	main.style.pointerEvents = "all";

	// Check which element is onscreen
	window.addEventListener("wheel", checkVisible);
}

let details = {
	vid1: ["10.6 MPH", "5 SECONDS", "PUSSY WILLOW BRANCH"],
	vid2: ["11 MPH", "3 SECONDS", "asdfasdf"],
	vid3: ["10.6 MPH", "5 SECONDS", "PUSSY WILLOW BRANCH"],
	vid4: ["11 MPH", "3 SECONDS", "asdfasdf"],
	vid5: ["10.6 MPH", "5 SECONDS", "PUSSY WILLOW BRANCH"],
	vid6: ["11 MPH", "3 SECONDS", "asdfasdf"],
	vid7: ["10.6 MPH", "5 SECONDS", "PUSSY WILLOW BRANCH"],
	vid8: ["11 MPH", "3 SECONDS", "asdfasdf"],
	vid9: ["10.6 MPH", "5 SECONDS", "PUSSY WILLOW BRANCH"]
}

let infoSpeed = document.querySelector(".info-speed");
let infoDuration = document.querySelector(".info-duration");
let infoDesc = document.querySelector(".info-desc");
function checkVisible() {
	for (let mainVideo of document.querySelectorAll(".main-video")) {
		let rect = mainVideo.getBoundingClientRect();
		let viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
		if (!(rect.bottom < 0 || rect.top - viewHeight >= 0)) {
			let videoNumber = mainVideo.dataset.video;
			console.log(videoNumber);
			infoSpeed.innerText = details[videoNumber][0];
			infoDuration.innerText = details[videoNumber][1];
			infoDesc.innerText = details[videoNumber][2];
		}
	}
  }
  