// Locomotive + ScrollTrigger
function init() {
	gsap.registerPlugin(ScrollTrigger);

	const locoScroll = new LocomotiveScroll({
		el: document.querySelector(".main"),
		smooth: true,
	});
	locoScroll.on("scroll", ScrollTrigger.update);

	ScrollTrigger.scrollerProxy(".main", {
		scrollTop(value) {
			return arguments.length
				? locoScroll.scrollTo(value, 0, 0)
				: locoScroll.scroll.instance.scroll.y;
		},
		getBoundingClientRect() {
			return {
				top: 0,
				left: 0,
				width: window.innerWidth,
				height: window.innerHeight,
			};
		},

		pinType: document.querySelector(".main").style.transform
			? "transform"
			: "fixed",
	});

	ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

	ScrollTrigger.refresh();
}
init();

//CursorAnimation
var crsr = document.querySelector(".cursor");
var main = document.querySelector(".main");
var video = document.querySelector("video");

document.addEventListener("mousemove", function (dets) {
	crsr.style.left = dets.x + 20 + "px";
	crsr.style.top = dets.y + 20 + "px";
});
// video.addEventListener("mouseenter", function(dets) {
//  BsCursor.style.width = "25%"
//   crsr.style.innerHTML = "SOUND ON"
// })

// ColorAnimationofPage1
var tl = gsap.timeline({
	scrollTrigger: {
		trigger: ".page1 h1",
		scroller: ".main",
		// markers : true,
		start: "top 27%",
		end: "top 0%",
		scrub: 3,
	},
});
tl.to(
	".page1 h1",
	{
		x: -100,
	},
	"one"
);
tl.to(
	".page1 h2",
	{
		x: 100,
	},
	"one"
);
tl.to(
	".page1 video",
	{
		width: "90%",
	},
	"one"
);

// ColorAnimationofPage2
var tl2 = gsap.timeline({
	scrollTrigger: {
		trigger: ".page1 h1",
		scroller: ".main",
		// markers : true,
		start: "top -115%",
		end: "top -130%",
		scrub: 3,
	},
});
tl2.to(".main", {
	backgroundColor: "#fff",
});

// ColorAnimationofPage3
var tl3 = gsap.timeline({
	scrollTrigger: {
		trigger: ".page1 h1",
		scroller: ".main",
		// markers : true,
		start: "top -400%",
		end: "top -420%",
		scrub: 3,
	},
});
tl3.to(".main", {
	backgroundColor: "#0F0D0D",
});

// BoxImageAnimation
var boxes = document.querySelectorAll(".box");
boxes.forEach(function (elem) {
	elem.addEventListener("mouseenter", function () {
		var att = elem.getAttribute("data-image");
		crsr.style.width = "400px";
		crsr.style.height = "350px";
		crsr.style.borderRadius = "0";
		crsr.style.backgroundImage = `url(${att})`;
	});
	elem.addEventListener("mouseleave", function () {
		elem.style.backgroundColor = "transparent";
		crsr.style.width = "20px";
		crsr.style.height = "20px";
		crsr.style.borderRadius = "50%";
		crsr.style.backgroundImage = `none`;
	});
});

// NavTextHoverAnimation
var h4 = document.querySelectorAll("#nav h4");
var purple = document.querySelector("#purple");
h4.forEach(function (elem) {
	elem.addEventListener("mouseenter", function () {
		purple.style.display = "block";
		purple.style.opacity = "1";
	});
	elem.addEventListener("mouseleave", function () {
		purple.style.display = "none";
		purple.style.opacity = "0";
	});
});

// var tl4 = gsap.timeline({
// 	scrollTrigger: {
// 		trigger: "#purple",
// 		scroller: "body",
// 		start: "top 0%",
// 		end: "top 100%",
// 		scrub: 2,
// 	},
// });

gsap.to("#purple h1", {
  x : -200,
  duration : 1,
  delay : 0.5,
  stagger : 0.2,
  repeat : -1
})
