var mydata = data;
var ctx = document.getElementById('finalChart');

function getCityDataWasteType(data,city,wasteType){
    let cityData=data[0][city];
    let referenceYears=Object.keys(cityData);
    let garbageData=[];
    for(let i=0;i<referenceYears.length;i++){
        garbageData.push(Number(cityData[referenceYears[i]][wasteType].replace(",","")));
    }
    for(let i=0;i<referenceYears.length;i++){
        referenceYears[i] = referenceYears[i].substring(0,4);
    }
    return[referenceYears,garbageData];
}


var [years1,garbageData] =getCityDataWasteType(mydata,"Melbourne","garbage_collected");
var [years2,recyclingData] =getCityDataWasteType(mydata,"Melbourne","recycle_collected");
const findAverage = (arr) => arr.reduce((a, b) => a + b) / arr.length;
var baseline1 = findAverage(garbageData);
var baseline2 = findAverage(recyclingData);


labels = [];
const chart_dataset = {
  labels: years1,
  datasets: [
    {
        label: 'Recycling',
        data: recyclingData,
        borderColor: 'rgba(255,255,212, .9)',
        backgroundColor: 'rgba(255,255,212, .8)',
        fill: true
    },
    {
        label: 'Garbage',
        data: garbageData,
        borderColor: 'rgba(199,233,192,0.8)',
        backgroundColor: 'rgba(199,233,192,0.8)',
        fill: true
    },
  ]
};

var recyclingBarChart = new Chart(ctx, {
  type: 'line',
  data: chart_dataset,
  options: {
      maintainAspectRatio: false,
      scales: {
          y: {
                stacked: true,
                title: {
                    display: true,
                    text: "Amount Collected",
                    font: {
                        size: 14
                    }
                },
            },
          X: {
                ticks: {
                    maxTicksLimit: 10
                },
                grid: {
                    display: false,
                },
            }
        },
        elements: {
            point:{
                radius: 0
            }
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        plugins: {
            tooltip: {
                mode: 'index',
                intersect: false,
                backgroundColor: '#888888',
                titleAlign: 'center',
                bodyAlign: 'center',
                titleFont: {
                    size: 24,
                    weight: 'bold',
                    family: 'Trebuchet MS'
                },
                bodyFont: {
                    family: 'Trebuchet MS',
                    size: 16,
                },
                callbacks: {
                    title: function(tooltipItems, data) {
                        let cityName = document.getElementById("city").value;
                        return cityName + " | " + tooltipItems[0].label;
                    },
                    label: function (tooltipItems, data) {
                        var amount = tooltipItems.formattedValue;
                        var type = tooltipItems.dataset.label;
                        var index = tooltipItems.dataIndex;
                        var recyc = recyclingBarChart.data.datasets[0].data[index];
                        var garb = recyclingBarChart.data.datasets[1].data[index];
                        var perc = Math.round((recyc/(garb+recyc)) * 100);
                        if (type === "Garbage") {
                            var titleString = [amount + " tonnes of " + type.toLowerCase()];
                            titleString.push(perc + "% of waste is recycled");
                            return titleString;
                        }
                        return amount + " tonnes of " + type.toLowerCase() ;
                    }
                },
                displayColors: false,
            },
            title: {
                display: true,
                text: 'Recycling vs Garbage Collected',
                font: {
                    size: 24,
                    weight: 'bold',
                    family: 'Trebuchet MS'
                }
            },
            subtitle: {
                    display: true,
                    text: '2001-2018',
                    font: {
                        size: 16,
                        family: 'Trebuchet MS'
                    }
            },
        }
    }
});
