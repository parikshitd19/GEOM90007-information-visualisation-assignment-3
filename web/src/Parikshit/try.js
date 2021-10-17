var mydata = JSON.parse(data)[0];
var ctx = document.getElementById('timeSeriesChart');
var city= document.getElementById("city").value;

function getCityDataWasteType(data,city,wasteType){
  let cityData=data[city];
  let referenceYear=[];
  for(let i=0;i<Object.keys(cityData).length;i++){
    referenceYear.push(Object.keys(cityData)[i].split("-")[0]);
  }
  let referenceYears=Object.keys(cityData);
  let garbageData=[];
  for(let i=0;i<referenceYears.length;i++){
    garbageData.push(Number(cityData[referenceYears[i]][wasteType].replace(",","")));
  }
  return[referenceYear,garbageData];
}


var [referenceYears,recycleCollectedData]=getCityDataWasteType(mydata,city,"recycle_collected");
var [referenceYears1,recycleProcessedData]=getCityDataWasteType(mydata,city,"recycle_processed");

var chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels:referenceYears,
    datasets: [{
      label: 'Recycle Collected',
      data: recycleCollectedData,
      borderWidth: 3,
      borderColor:'rgb(0, 0, 255)',
      backgroundColor:'rgb(0, 0, 255)'
    },{
      label: 'Recycle Processed',
      data: recycleProcessedData,
      borderWidth: 3,
      borderColor:'rgb(0, 255, 0)',
      backgroundColor:'rgb(0, 255, 0)',
      fill: {
        target: '-1',
        above: 'rgb(255, 255, 0)',   // Area will be red above the origin
        below: 'rgb(255, 0, 0)'    // And blue below the origin
      }
    }]
  },
  options: {
    plugins: {
      legend: {
          position:'right',
        labels: {
          usePointStyle: true,
        },
      }
    },
    scales: {
        yAxes: {
            title: {
                display: true,
                text: "Weight(in tonnes)",
                font: {
                    size: 15
                }
            },
            ticks: {
                precision: 0
            }
        },
        xAxes: {
            title: {
                display: true,
                text: 'Reference Year',
                font: {
                    size: 15
                }
            }
        }
    }
  }
});

function changeChart(){
  let city = document.getElementById("city").value;
  let [referenceYears,recycleCollectedData]=getCityDataWasteType(mydata,city,"recycle_collected");
  let [referenceYears1,recycleProcessedData]=getCityDataWasteType(mydata,city,"recycle_processed");
  chart.data.datasets=[{
    label: 'Recycle Collected',
    data: recycleCollectedData,
    borderWidth: 3,
    borderColor:'rgb(0, 0, 255)',
    backgroundColor:'rgb(0, 0, 255)'
  },{
    label: 'Recycle Processed',
    data: recycleProcessedData,
    borderWidth: 3,
    borderColor:'rgb(0, 255, 0)',
    backgroundColor:'rgb(0, 255, 0)',
    fill: {
      target: '-1',
      above: 'rgb(255, 255, 0)',   // Area will be red above the origin
      below: 'rgb(255, 0, 0)'    // And blue below the origin
    }
  }];
  chart.update();

}