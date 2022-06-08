const main = document.querySelector("main");

async function fetchData(period) {
	let data = await fetch("./data.json");
	data = await data.json();

	for (let topic of data) {
		//  <div class="card-container">
		const container = document.createElement("div");
		container.classList.add("card-container");

		//      <div class="card card__bottom card__bottom--list" data-type="work">
		const bottom = document.createElement("div");
		bottom.classList.add("card", "card__bottom", "card__bottom--list");
		bottom.dataset.type = topic.title.toLowerCase().split(" ").join("-");
		//          <img src="./images/icon-work.svg" alt="" class="card__background">
		const background = document.createElement("img");
		background.classList.add("card__background");
		background.src = `./images/icon-${topic.title
			.toLowerCase()
			.split(" ")
			.join("-")}.svg`;
		background.alt = "";
		//      </div>
		bottom.appendChild(background);

		//      <div class="card card__top card__top--list">
		const top = document.createElement("div");
		top.classList.add("card", "card__top", "card__top--list");
		//          <div class="card__title">
		const title = document.createElement("div");
		title.classList.add("card__title");
		//              <h2 class="fs-m fc-l fw-500">
		const type = document.createElement("h2");
		type.classList.add("fs-m", "fc-l", "fw-500");
		type.innerText = topic.title;
		//              <p class="fs-m fc-d">
		const menu = document.createElement("p");
		menu.classList.add("fs-m", "fc-d");
		menu.innerText = "●●●";
		//          </div>
		title.append(type, menu);
		//          <div class="card__stats">
		const stats = document.createElement("div");
		stats.classList.add("card__stats");
		//              <p class="fs-xl fc-l">
		const current = document.createElement("p");
		current.classList.add("fs-xl", "fc-l");
		current.innerText = `${topic.timeframes[period].current}hrs`;
		//              <p class="fs-s fc-d">
		const previous = document.createElement("p");
		previous.classList.add("fs-s", "fc-d");
		previous.innerText = `Last Week - ${topic.timeframes[period].previous}hrs`;
		//          </div>
		stats.append(current, previous);
		//      </div>
		top.append(title, stats);
		//  </container>
		container.append(bottom, top);

		main.append(container);
	}
}

fetchData("weekly");
