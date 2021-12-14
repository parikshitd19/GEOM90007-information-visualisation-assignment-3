

let data_2019 = waste_type_by_LGA.filter(w => w.reference_year === "2018-2019");

let general_waste_total = 0;
let recycling_waste_total = 0;

for (d of data_2019) {
    general_waste_total += d.garbage_collected;
    recycling_waste_total += d.recycle_collected;
}

console.log(general_waste_total);
console.log(recycling_waste_total);



// ----------------- MAKING THE FIRST CHART ------------------------------------


var pie_chart_context = document.getElementById('pie_chart').getContext('2d');
var pie_chart = new Chart(pie_chart_context, {
    type: 'doughnut',
    responsive: true,
    maintainAspectRatio: false,
    data: {
        labels: ['Garbage collected', 'Recycling collected'],
        datasets: [{
            data: [general_waste_total, recycling_waste_total],
            backgroundColor: [
                'rgba(199,233,192, .85)',
                '#ffeda0'
            ],
            hoverOffset: 4
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                color: 'rgba(35, 31, 32, 0.7)',
                text: 'Garbage vs Recycling Collected',
                font: {
                    size: 20,
                    weight: 'bold',
                    family: 'Trebuchet MS'
                }
            },
            subtitle: {
                display: false,
                text: '2019',
                font: {
                    size: 18,
                    family: 'Trebuchet MS'
                },
            },
            legend: {
                display: false,
                position: 'top',
                labels: {
                    font: {
                        family: 'Trebuchet MS'
                    }
                }
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
                        let waste_amount = tooltipItems.parsed;
                        var str = waste_amount.toString().split(".");
                        str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        let waste_type = tooltipItems.label;
                        if (waste_type === "Garbage collected") {
                            return str.join(".") + " tons of general waste per year";
                        }
                        else {
                            return str.join(".") + " tons of recycling per year";
                        }
                    }
                },
                displayColors: false,
            }
        }
    }
});