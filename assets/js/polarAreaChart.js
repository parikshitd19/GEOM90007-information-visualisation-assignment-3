var polarAreaChart = new Chart(emissionPolarAreaChart, {
    type: 'polarArea',
    data: {
        labels: ['Solid Waste', 'Residential', 'Manufacturing', 'Fuel Transportation', 'Railways'],
        datasets: [{
            label: 'Gas Emmited ',
            data: [310038, 262376, 247421, 389055, 98673],
            backgroundColor: [
                'rgba(166,206,227, 0.8)',
                'rgba(31,120,180, 0.8)',
                'rgba(254,227,145, 0.8)',
                'rgba(178,223,138, 0.8)',
                'rgba(51,160,44, 0.8)'
            ],
            fill: false
        }]
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                color: 'rgba(35, 31, 32, 0.7)',
                text: 'Melbourne CBD Greenhouse Gas Emissions',
                font: {
                    size: 24,
                    weight: 'bold',
                    family: 'Trebuchet MS'
                }
            },
            subtitle: {
                display: true,
                text: 'by Sector (2013 - 2020)',
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
                    title: function(tooltipItems, data) {
                        return tooltipItems[0].label;
                    },
                    label: function (tooltipItems, data) {
                        let amount = tooltipItems.formattedValue;
                        let type = tooltipItems.dataset.label;
                        return amount + " tonnes of gas emitted ";
                    }
                },
                displayColors: false,
            }
        }
    }

});

// Update the chart according to the dropdown list
const emissionType = document.getElementById('emissionType');
emissionType.addEventListener('change', polarFilter);
function polarFilter(){
    polarAreaChart.data.datasets[0].data = emissionType.value.split(',');
    polarAreaChart.update();
}