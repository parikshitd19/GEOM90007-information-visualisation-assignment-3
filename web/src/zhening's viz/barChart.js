var barChart = new Chart(wasteBarChart, {
    type: 'bar',
    data: {
        labels: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: 'Median Weight Collected (in tonnes)',
            data: [429.20, 534.51, 535.34, 495.42, 527.64, 552.64, 615.55, 687.32, 755.92, 924.07, 749.62, 872.40],
            backgroundColor: [
                '#a1d99b'
                
            ],
            borderColor: [
                '#31a354'
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                beginAtZero: true
            }
        },
        layout: {
            padding: 5
        },
        plugins: {
            tooltip: {
                xAlign: 'center',
                yAlign: 'bottom',
                displayColors: false,
                titleAlign: 'center',
                bodyAlign: 'center'
            }
        }
    }
});

const wasteType = document.getElementById('wasteType');
wasteType.addEventListener('change', wasteFilter);
function wasteFilter(){
    barChart.data.datasets[0].data = wasteType.value.split(',');
    barChart.update();
}