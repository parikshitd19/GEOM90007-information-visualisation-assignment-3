mapboxgl.accessToken = 'pk.eyJ1IjoiY29saW5tY2xlYW4iLCJhIjoiY2tzemJmbndmMmJ5MzMzbjE4eTkzbmRzNSJ9.-STq_VeSaSPb7Bp0hCuaGQ';
let energyMap = new mapboxgl.Map({
    container: 'energyMap',
    style: 'mapbox://styles/colinmclean/ckup7jc3c5mpm17s7qwumogmt',
    center: [144.952, -37.810],
    zoom: 11.9
})

// adding a navigation and scale control to the map
energyMap.addControl(new mapboxgl.NavigationControl());
energyMap.addControl(new mapboxgl.ScaleControl());

// controlling the load function
energyMap.on('load', e => {
    energyMap.setLayoutProperty('edited-energy-data', 'visibility', 'none');
    energyMap.setLayoutProperty('energy-2011', 'visibility', 'none');
    energyMap.setLayoutProperty('energy-2021', 'visibility', 'visible');
    
    let legend = document.querySelector('#energyLegend');
    legend.appendChild(document.createElement('div'));
    //legend.style.display = "none";
    
    for (let step of energy_steps) {
        let item = document.createElement('div');
        let key = document.createElement('span');
        key.classList.add('legend-key');
        key.style.backgroundColor = step.color;
        let value = document.createElement('span');
        value.innerHTML = step.name;
        item.appendChild(key);
        item.appendChild(value);
        legend.appendChild(item);
    }
    
    // handling click events for basic layer (on a suburb)  
    energyMap.on('click', 'energy-2021', e => {
        let total_energy = Math.round(e.features[0].properties.total);
        let commercial_energy = Math.round(e.features[0].properties.comm);
        let residential_energy = Math.round(e.features[0].properties.resi);
        let energy_title = "";
        let coords = e.features[0].geometry.coordinates[0][0];
        if (coords.length > 2) {
            coords = coords[0];
        }

        energyMap.flyTo({
            center: coords,
            speed: 0.3,
            zoom: 13
        });
        
        const lat = coords[0];
        const lng = coords[1];
        var url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + lat + "," + lng + ".json?access_token=" + mapboxgl.accessToken;
        $.get(url, function(data){
            var myData = data;
            processData(data);
        });
        
    
        function processData(data){
            console.log(data);
            energy_title = data.features[2].text;
            new mapboxgl.Popup(closeOnClick = true)
                .setLngLat(e.lngLat)
                .setHTML('<span class = "suburb-name">' + energy_title + '</span>' + '</br>' +
                    '<span class = "waste-amount">' + total_energy + '</span>' + ' total watts consumed'
                    + '</br>' + '<span class = "waste-amount">' + commercial_energy + '</span>'
                    + ' commercial | '
                    + '<span class = "waste-amount">' + residential_energy + '</span>' + ' residential')
                .addTo(energyMap);
        }
    
    });
    
    //  update mouse to a pointer if you mouse over the layer  
    energyMap.on('mouseenter', 'energy-2021', e => {
        energyMap.getCanvas().style.cursor = 'pointer';
    });
    
    energyMap.on('mouseleave', 'energy-2021', e => {
        energyMap.getCanvas().style.cursor = '';
    });
    
        // Add a button that ranks the suburbs by emissions
    let orderLinkEnergy = document.createElement('a');
    orderLinkEnergy.href = '#';
    orderLinkEnergy.classList.add('active');
    orderLinkEnergy.textContent = "Reset View";
    let energyButton = document.querySelector('#energy-choropleth-button');
    energyButton.appendChild(orderLinkEnergy);
    
    // show all waste types
    energyButton.onclick = e => {
        e.preventDefault();
        e.stopPropagation();        
        energyMap.flyTo({
            center: [144.952, -37.810],
            zoom: 11.9,
            speed: 0.3
        });
        let popup = document.querySelector('.mapboxgl-popup');
        if (popup) {
            popup.style.display = "none";
        };
        
    }
    
});