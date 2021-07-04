let burgerBtn = document.querySelector('.header__burger-manu');
let manu = document.querySelector('.header__manu-body');
let body = document.querySelector('body');


burgerBtn.addEventListener('click', () => {
	burgerBtn.classList.toggle('open');
	manu.classList.toggle('open');
	body.classList.toggle('lock');
})