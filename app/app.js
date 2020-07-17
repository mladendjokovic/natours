const navItems = document.getElementsByClassName('navigation__link');
const checkbox = document.querySelector('.navigation__checkbox');
for (let item of navItems) {
	item.addEventListener('click', (e) => {
		e.preventDefault();
		checkbox.click();
		const targetElement = item.getAttribute('href').slice(1);
		setTimeout(() => {
			const targetPosition = document.getElementById(targetElement).getBoundingClientRect();
			const currentPosition = window.pageYOffset;
			let y = currentPosition + targetPosition.top;
			window.scrollTo(0, y);
		}, 1000);
	});
}
