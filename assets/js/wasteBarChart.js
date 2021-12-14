var barChart = new Chart(wasteBarChart, {
    type: 'bar',
    data: {
        labels: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: 'Median Weight Collected ',
            data: [1405.98, 1569.80, 1622.83, 1645.55, 1754.82, 1896.27, 1946.72, 2140.86, 2331.68, 2466.53, 2734.50, 2608.78],
            backgroundColor: [
                'rgba(199,233,192,0.75)'
            ],
            borderColor: [
                'rgba(35,139,69,.9)'   
            ],
            borderWidth: 2,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        scales: {
            y: {
                grid: {
                    display: false,
                },
                beginAtZero: true,
            },
            x: {
                title: {
                    display: true,
                    text: 'Tonnes of Waste Collected',
                    font: {
                        size: 16,
                        family: 'Trebuchet MS'
                    }
                },
            },
        },
        layout: {
            padding: 5
        },
        plugins: {
            title: {
                display: true,
                color: 'rgba(35, 31, 32, 0.7)',
                text: 'Waste Collected in Metro Melbourne',
                font: {
                    size: 20,
                    weight: 'bold',
                    family: 'Trebuchet MS'
                }
            },
            legend: {
                display: false
            },
            subtitle: {
                display: true,
                text: 'by Waste Type (2009 - 2020)',
                font: {
                    size: 16,
                    family: 'Trebuchet MS'
                },
            },
            tooltip: {
                backgroundColor: '#888888',
                titleAlign: 'center',
                bodyAlign: 'center',
                titleFont: {
                    size: 18,
                    weight: 'bold',
                    family: 'Trebuchet MS'
                },
                bodyFont: {
                    family: 'Trebuchet MS',
                    size: 14,
                },
                callbacks: {
                    label: function (tooltipItems, data) {
                        let amount = tooltipItems.parsed.x;
                        let type = tooltipItems.dataset.label;
                        var selecter = document.getElementById('wasteSelecter');
                        var selecterValue = selecter.options[selecter.selectedIndex].text; 
                        return amount + " tonnes of " + selecterValue.toLowerCase() + " waste collected";
                    } 
                },
                displayColors: false,
            }
        }
    }
});

const wasteType = document.getElementById('wasteSelecter');
wasteType.addEventListener('change', wasteFilter);
function wasteFilter(){
    barChart.data.datasets[0].data = wasteType.value.split(',');
    barChart.update();
}