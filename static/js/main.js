document.addEventListener('DOMContentLoaded', function() {
    const sidenav = document.querySelector('.sidenav');
    M.Sidenav.init(sidenav, {});

    const scrollspy = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(scrollspy, {});

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
            }
        }
    });
})