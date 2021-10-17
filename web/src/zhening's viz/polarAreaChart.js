var polarAreaChart = new Chart(emissionPolarAreaChart, {
    type: 'polarArea',
    data: {
        labels: ['Solid Waste Emission', 'Residential Electricity Emission', 'Manufacturing Electricity Emission', 'Fuel Transportation Emission', 'Railway Emission'],
        datasets: [{
            label: 'Points',
            data: [310038, 262376, 247421, 389055, 98673],
            backgroundColor: [
                'rgba(127,201,127, 0.7)',
                'rgba(190,174,212, 0.7)',
                'rgba(253,192,134, 0.7)',
                'rgba(255,255,153, 0.7)',
                'rgba(56,108,176, 0.7)'
            ],
            fill: false
        }]
    },
    options: {
        maintainAspectRatio: false,
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

// Update the chart according to the dropdown list
const emissionType = document.getElementById('emissionType');
emissionType.addEventListener('change', polarFilter);
function polarFilter(){
    polarAreaChart.data.datasets[0].data = emissionType.value.split(',');
    polarAreaChart.update();
}