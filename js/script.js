function burgerActive() {
	headerBurger.classList.toggle('header__burger-active');
}
function menuActive() {
	document.querySelector('.header__menu').classList.toggle('header-menu-active');
}
const headerBurger = document.querySelector('.header__burger');
document.addEventListener('click', function (e) {
	if (e.target == headerBurger) {
		burgerActive();
		menuActive();
	}
})
