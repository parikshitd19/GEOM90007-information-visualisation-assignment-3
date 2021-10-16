var mydata = JSON.parse(data)[0];
var ctx = document.getElementById('timeSeriesChart');

function getCityDataWasteType(data,city,wasteType){
  let cityData=data[city];
  let referenceYears=Object.keys(cityData);
  let garbageData=[];
  for(let i=0;i<referenceYears.length;i++){
    garbageData.push(Number(cityData[referenceYears[i]][wasteType].replace(",","")));
  }
  return[referenceYears,garbageData];
}

var [referenceYears,recycleCollectedData]=getCityDataWasteType(mydata,"Knox","recycle_collected");
var [referenceYears1,recycleProcessedData]=getCityDataWasteType(mydata,"Knox","recycle_processed");

var chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels:referenceYears,
    datasets: [{
      label: 'Recycle Collected',
      data: recycleCollectedData,
      borderWidth: 1,
      fill:{
        target: 1,
        above: 'rgb(255, 0, 0)',   // Area will be red above the origin
        below: 'rgb(0, 0, 255)' 
      }
    },{
      label: 'Recycle Processed',
      data: recycleProcessedData,
      borderWidth: 1
    }]
  },
  options: {}
});