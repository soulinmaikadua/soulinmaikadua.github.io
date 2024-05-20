const startMenu = () => {
	const startMenuId = document.getElementById("start-menu");
	// Check if the start menu is currently hidden
	if (startMenuId?.classList.contains("hidden")) {
		// If hidden, show the start menu
		startMenuId.classList.remove("hidden");
		startMenuId.classList.add("block");
		document.getElementById("windows-icon").style.background = "white";
	} else {
		// If visible, hide the start menu
		startMenuId?.classList.remove("block");
		startMenuId?.classList.add("hidden");
		document.getElementById("windows-icon").style.background = "none";
	}
};

const closeStartMenu = () => {
	const startMenuId = document.getElementById("start-menu");
	startMenuId?.classList.remove("block");
	startMenuId?.classList.add("hidden");
	document.getElementById("windows-icon").style.background = "none";
}

const openStickyNote = () => {
	closeStartMenu();
	const startMenuId = document.getElementById("sticky-note");
	// Check if the start menu is currently hidden
	if (startMenuId?.classList.contains("hidden")) {
		// If hidden, show the start menu
		startMenuId.classList.remove("hidden");
		startMenuId.classList.add("block");
		document.getElementById("sticky-note-icon").style.background = "white";
	}
};

const closeStickyNote = () => {
	const startMenuId = document.getElementById("sticky-note");
	// If visible, hide the start menu
	startMenuId?.classList.remove("block");
	startMenuId?.classList.add("hidden");
	document.getElementById("sticky-note-icon").style.background = "none";

};
/**
 * taskbar
 */
// Create a new Date object for the current date and time
const now = new Date();

// Add 1 minute to the current time
const futureTime = new Date(now.getTime() + 1 * 60 * 1000); // 1 minute * 60 seconds * 1000 milliseconds
// Format the future time as HH:MM AM/PM
const futureHours = futureTime.getHours();
const futureMinutes = futureTime.getMinutes();
const ampm = futureHours >= 12 ? "PM" : "AM";
const formattedFutureTime = `${futureHours % 12 || 12}:${futureMinutes < 10 ? "0" : ""
	}${futureMinutes} ${ampm}`;
document.getElementById('time').innerHTML = formattedFutureTime
document.getElementById("date").innerHTML = now.toDateString();
/**
 * start menu
 */
elements = document.getElementsByClassName("date-history")
for (let i = 0; i < elements.length; i++) {
	elements[i].innerHTML = now.toDateString();
}

// script.js
const draggable = document.getElementById('sticky-note');
draggable.addEventListener('mousedown', (e) => {

	e.preventDefault();

	closeStartMenu();

	let shiftX = e.clientX - draggable.getBoundingClientRect().left;
	let shiftY = e.clientY - draggable.getBoundingClientRect().top;

	function moveAt(pageX, pageY) {
		draggable.style.left = pageX - shiftX + 'px';
		draggable.style.top = pageY - shiftY + 'px';
	}

	function onMouseMove(e) {
		moveAt(e.pageX, e.pageY);
	}

	document.addEventListener('mousemove', onMouseMove);

	draggable.onmouseup = () => {
		console.log('draggable');
		document.removeEventListener('mousemove', onMouseMove);
		draggable.onmouseup = null;
	};
});

draggable.ondragstart = () => {
	return false;
};
