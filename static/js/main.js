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

    const chart = document.querySelector('#chart').getContext('2d');

    const myLabels = [];
    const myData = [];

    results.forEach(result => {
        const month = result.date.slice(5, 7);
        const day = result.date.slice(8, 10);

        myLabels.push(`${day}.${month}`);
        myData.push(Number(result.weight));
    });

    const achievementChart = new Chart(chart, {
        type: 'line',
        data: {
            labels: myLabels,
            datasets: [{
                label: 'Лично тегло',
                data: myData,
                borderColor: '#ff9800',
                pointBackgroundColor: '#fff',
                pointRadius: 5,
                lineTension: 0
            }],
        },
        options: {
            responsive: true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            },
            layout: {
                padding: {
                    top: 5,
                    right: 10,
                    bottom: 5,
                    left: 10,
                }
            }
        }
    });
});