import fetchData from "./modules/fetchData.js";
const main = document.querySelector("main");
const buttons = document.querySelectorAll(".period-btn");

for (let button of buttons) {
	button.onclick = handleClick;
}

function handleClick(event) {
	for (let button of buttons) {
		if (button.classList.contains("fc-l")) {
			button.classList.remove("fc-l");
			button.classList.add("fc-d");
		}
	}
	event.target.classList.remove("fc-d");
	event.target.classList.add("fc-l");
	const list = document.querySelectorAll(".card-container--list");
	for (let item of list) {
		item.remove();
	}
	draw(event.target.dataset.period);
}

async function draw(period) {
	const list = await fetchData(period);
	for (let item of list) {
		main.appendChild(item);
	}
}

draw("weekly");
