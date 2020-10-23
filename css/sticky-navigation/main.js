window.addEventListener('scroll', function () {
    const header = document.querySelector('header')
    const windowScroll = window.scrollY > 0;

    header.classList.toggle('sticky', windowScroll);
})