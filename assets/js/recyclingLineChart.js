var mydata = data;
var ctx = document.getElementById('timeSeriesChart');

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

var [referenceYears,recycleCollectedData]=getCityDataWasteType(mydata,"Melbourne","recycle_collected");
var [referenceYears1,recycleProcessedData]=getCityDataWasteType(mydata,"Melbourne","recycle_processed");

recycleProcessedData = recycleProcessedData.map(function(d){
   return d - 10;
});

var chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels:referenceYears,
    datasets: [{
        label: 'Recycling Collected',
      data: recycleCollectedData,
      borderWidth: 3,
      borderColor:'rgb(254,153,41, .8)',
      backgroundColor:'rgb(254,153,41, .8)',
    },{
      label: 'Recycling Processed',
      data: recycleProcessedData,
      borderWidth: 3,
      borderColor:'rgb(254,196,79, .8)',
      backgroundColor:'rgb(254,196,79, .8)',
      fill: {
        target: '-1',
        above: '#d3d3d3',   // Area will be red above the origin
        below: 'rgba(255,255,212, .9)'    // And blue below the origin
      }
    }]
  },
  options: {
    maintainAspectRatio: false,
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
        title: {
                display: true,
                text: 'Recycling Collected and Recycling Processed',
                font: {
                    size: 24,
                    weight: 'bold',
                    family: 'Trebuchet MS'
                }
        },
        subtitle: {
                display: true,
                text: 'The Discrecpancy Between the Two',
                font: {
                    size: 16,
                    family: 'Trebuchet MS'
                }
            },
        tooltip: {
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
                        var coll = chart.data.datasets[1].data[index];
                        var proc = chart.data.datasets[0].data[index];
                        var perc = Math.round((1- (coll/proc)) * 100);
                        
                        if (type === "Recycling Processed") {
                            var titleString = [amount + " tonnes processed"];
                            titleString.push(perc + "% unused recycling");
                            return titleString;
                            
                        }
                        return amount + " tonnes collected";
                    }
                },
                displayColors: false,
                mode: 'index',
                intersect: false
            },
          legend: {
              position:'right',
                labels: {
                  usePointStyle: true,
                },
          }
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: "Amount Collected",
                    font: {
                        size: 14
                    }
                },
                ticks: {
                    precision: 0,
                },
            },
            X: {
                ticks: {
                    maxTicksLimit: 10
                },
                title: {
                    display: false,
                    text: 'Year',
                    font: {
                        size: 14
                    }
                },
                grid: {
                    display: false,
                },
            }
        }
    }
});

function changeChart(){
    let city = document.getElementById("city").value;
    let [referenceYears,recycleCollectedData]=getCityDataWasteType(mydata,city,"recycle_collected");
    let [referenceYears1,recycleProcessedData]=getCityDataWasteType(mydata,city,"recycle_processed");

    var [years1,garbageData] =getCityDataWasteType(mydata,city,"garbage_collected");
    var [years2,recyclingData] =getCityDataWasteType(mydata,city,"recycle_collected");
    recyclingData = recyclingData.map(function(d){
        return d - 10;
    });
    

  chart.data.datasets=[{
        label: 'Recycling Collected',
        data: recycleCollectedData,
        borderWidth: 3,
        borderColor:'rgb(254,153,41, .8)',
        backgroundColor:'rgb(254,153,41, .8)'
    },
    {
        label: 'Recycling Processed',
        data: recycleProcessedData,
        borderWidth: 3,
        borderColor:'rgb(254,196,79, .8)',
        backgroundColor:'rgb(254,196,79, .8)',
        fill: {
          target: '-1',
          above: '#d3d3d3',   // Area will be red above the origin
          below: 'rgba(255,255,212, .9)',    // And blue below the origin
        }
      }];
    
    recyclingBarChart.data.datasets=[
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
            backgroundColor:'rgba(199,233,192, 0.8)',
            borderColor: 'rgba(199,233,192,0.8)',
        fill: true
        },
    ];
    
    chart.update();
    recyclingBarChart.update();
}