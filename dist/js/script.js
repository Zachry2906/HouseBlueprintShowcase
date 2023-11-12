const burgir = document.querySelector('#burgir');
const nav = document.querySelector('#nav');

burgir.addEventListener('click', () => {
    burgir.classList.toggle('active');
    nav.classList.toggle('hidden');
    }
);

window.onscroll = function() {
    const header = document.querySelector('header');
    const fix = header.offsetTop;

    if (window.pageYOffset > fix) {
        header.classList.add('navFix');
    } else {
        header.classList.remove('navFix');
    }
}