let div    = document.querySelector('div');
let button = document.querySelector('button');

button.addEventListener('click', function() {
	fetch(`OsnovaServer${btn.innerHTML}.html`)
		.then(
		response => {
			return response.text();
		}
	).then(
		text => {
			div.innerHTML = text;
		}
	);
});
		// задание 1

		const pageDiv = document.querySelector('.server-div');
		const btns = document.querySelectorAll('.server-btn');

		btns.forEach((btn) => {
			btn.addEventListener('click', function () {
				fetch(`server${btn.innerHTML}.html`)
					.then((response) => {
						return response.text();
					})
					.then((text) => {
						pageDiv.innerHTML = text;
					});
			});
		});

		// Задание 2

		const btnLoad = document.querySelector('.load-page');
		const divLoad = document.querySelector('.loaded-page');

		let pageCounter = 1;

		btnLoad.addEventListener('click', function () {
			fetch(`server${pageCounter}.html`)
				.then((response) => {
					return response.text();
				})
				.then((text) => {
					divLoad.innerHTML = text;
				});
			pageCounter++;
		});
