// instantiating the map

mapboxgl.accessToken = 'pk.eyJ1IjoiY29saW5tY2xlYW4iLCJhIjoiY2tzemJmbndmMmJ5MzMzbjE4eTkzbmRzNSJ9.-STq_VeSaSPb7Bp0hCuaGQ';
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/colinmclean/ckubx2diz86bg18p9ol9oqyex',
    center: [145.300, -37.900],
    zoom: 8
});

let min_waste = Math.min(...LGA_waste_data.map(a => a.household_yield_kg));
let max_waste = Math.max(...LGA_waste_data.map(a => a.household_yield_kg));

// adds the title to a legend
function setup_legend() {
    let legend = document.querySelector('#legend');
    let item = document.createElement('div');
    legend.appendChild(item);
}

function formatLGA(chosenLGA) {
   var splitName = chosenLGA.toLowerCase().split(' ');
   for (var i = 0; i < splitName.length; i++) {
      splitName[i] = splitName[i].charAt(0).toUpperCase() +
      splitName[i].substring(1);
   }
   return splitName.join(' ');
}

// formats the legend with the given steps
function format_legend() {
    let legend = document.querySelector('#legend');
    for (let step of choropleth_steps) {
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
}

function get_LGA_waste(lga_name) {
    var filtered_data = LGA_waste_data.filter(function (data) { return (data.lga.toUpperCase() == lga_name); });
    
    lga_name = lga_name.replace(' CITY','');
    lga_name = lga_name.replace(' SHIRE','');
    var general_waste_data = waste_type_by_LGA.filter(function (data) { return (data.LG.toUpperCase() == lga_name); });
    
    return [filtered_data[0].household_yield_kg, general_waste_data[17].total_collected];
}

// controlling the load function
map.on('load', e => {
    map.setLayoutProperty('metro_LGAs', 'visibility', 'none');
    map.setLayoutProperty('metro_choropleth', 'visibility', 'visible');

    let legend = document.querySelector('#legend');
    legend.style.display = "none";
    setup_legend();
    format_legend();


    // handling click events for basic layer (on a suburb)  
    map.on('click', 'metro_LGAs', e => {

        // centering the map on the area the user clicked

        let coords = e.features[0].geometry.coordinates[0][0]
        coords[1] = coords[1];
        
        let chosen_name = e.features[0].properties['vic_lga__3'].toLowerCase();
        chosen_name = formatLGA(chosen_name);
        document.getElementById("city").value = chosen_name;
        changeChart();

        map.flyTo({
            center: coords,
            speed: 0.3,
            zoom: 8.75
        });
        let waste_amount = get_LGA_waste(e.features[0].properties.vic_lga__2);

        // adding a pop-up to display some basic information to the user
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML('<span class = "suburb-name">' + e.features[0].properties['vic_lga__3'] + '</span>'
                + '<br>' + '<span class = "waste-amount">' + waste_amount[1] + '</span>' + ' tonnes collected in total'
                + '<br>' + '<span class = "waste-amount">' + waste_amount[0] + '</span>' + ' kg/household')
            .addTo(map);
    });

    // handling click events for basic layer (on a suburb)  
    map.on('click', 'metro_choropleth', e => {
        // centering the map on the area the user clicked

        let coords = e.features[0].geometry.coordinates[0][0]
        coords[1] = coords[1];
        

        map.flyTo({
            center: coords,
            speed: 0.3,
            zoom: 8.75
        });
        let waste_amount = get_LGA_waste(e.features[0].properties.vic_lga__2);
                
        let chosen_name = e.features[0].properties['vic_lga__3'].toLowerCase();
        chosen_name = formatLGA(chosen_name);
        document.getElementById("city").value = chosen_name;
        changeChart();


        // adding a pop-up to display some basic information to the user
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML('<span class = "suburb-name">' + e.features[0].properties['vic_lga__3'] + '</span>'
                + '<br>' + '<span class = "waste-amount">' + waste_amount[1] + '</span>' + ' tonnes collected in total'
                + '<br>' + '<span class = "waste-amount">' + waste_amount[0] + '</span>' + ' kg/household')
            .addTo(map);
    });

    // Add a button that ranks the suburbs by emissions
    let orderLink = document.createElement('a');
    orderLink.href = '#';
    orderLink.classList.add('active');
    orderLink.textContent = "Toggle Choropleth";
    let orderButton = document.querySelector('#choropleth-button');
    orderButton.appendChild(orderLink);

    // show all waste types
    orderButton.onclick = e => {
        e.preventDefault();
        e.stopPropagation();

        if (legend.style.display === "none") {
            legend.style.display = "block";
        } else {
            legend.style.display = "none";
        }

        const layoutProperty = map.getLayoutProperty('metro_choropleth', 'visibility');
        if (layoutProperty == 'visible') {
            map.setLayoutProperty('metro_LGAs', 'visibility', 'visible');
            map.setLayoutProperty('metro_choropleth', 'visibility', 'none');
        }
        else {
            map.setLayoutProperty('metro_LGAs', 'visibility', 'none');
            map.setLayoutProperty('metro_choropleth', 'visibility', 'visible');
        }

        map.flyTo({
            center: [145.300, -37.900],
            zoom: 8,
            speed: 0.3
        });

        let popup = document.querySelector('.mapboxgl-popup');
        if (popup) {
            popup.style.display = "none";
        };

    };

    // Same as labs, update mouse to a pointer if you mouse over a suburb  
    map.on('mouseenter', 'metro_LGAs', e => {
        map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', 'metro_LGAs', e => {
        map.getCanvas().style.cursor = '';
    });

    map.on('mouseenter', 'metro_choropleth', e => {
        map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', 'metro_choropleth', e => {
        map.getCanvas().style.cursor = '';
    });
});

// adding a navigation and scale control to the map
map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.ScaleControl());
map.addControl(new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
    zoom: 10.5,
    placeholder: 'Search for an LGA',
    }), 'top-left',
);