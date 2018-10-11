document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar-custom');

    if (window.scrollY > 200) {
        navbar.classList.add('navbar-custom-scrolled');
        navbar.classList.remove('navbar-custom');
    }

    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
            navbar.classList.add('navbar-custom-scrolled');
            navbar.classList.remove('navbar-custom');
        } else {
            navbar.classList.add('navbar-custom');
            navbar.classList.remove('navbar-custom-scrolled');
        }
    });    

    const sidenav = document.querySelector('.sidenav');
    M.Sidenav.init(sidenav, {});

    const scrollspy = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(scrollspy, {
        scrollOffset: 180
    });

    const imgs = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(imgs, {});

    const carousel = document.querySelector('.carousel');
    M.Carousel.init(carousel, { fullWidth: true, indicators: true });

    const select = document.querySelector('select');
    M.FormSelect.init(select, {});
});