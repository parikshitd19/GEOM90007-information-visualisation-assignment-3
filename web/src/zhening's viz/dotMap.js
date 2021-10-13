// Load the dot map
mapboxgl.accessToken = 'pk.eyJ1IjoiemhlbmluZ3dhbmciLCJhIjoiY2t0bDVoenFpMG45cTJxbzY5ZDc5d2ZydCJ9.NDxLhYGEwwlKsuWQht_7tg'; 
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/zheningwang/ckuklh2lm8k4n18rzzngmygcl'
});


map.on('load', e => {

    // Create a legend, code adapted from GEOM90007 Lab 6
    let facilityType = [
        {
            "name": "Transfer Station",
            "color": "#7570b3"
        },
        {
            "name": "Landfill",
            "color": "#d95f02"
        },
        {
            "name": "MRF",
            "color": "#d95f02"
        },
        {
            "name": "Drop off",
            "color": "#e7298a"
        },
        {
            "name": "Organics",
            "color": "#66a61e"
        },
        {
            "name": "Concrete Store",
            "color": "#a6761d"
        },
        {
            "name": "Trailer",
            "color": "#e6ab02"
        }
    ];


    let legend = document.querySelector('#legend');

    for (let type of facilityType) {
        let item = document.createElement('div');

        let key = document.createElement('span');
        key.classList.add('legend-key');
        key.style.backgroundColor = type.color;

        let value = document.createElement('span');
        value.innerHTML = type.name;

        item.appendChild(key);
        item.appendChild(value);
        legend.appendChild(item);
    }

    const popup = new mapboxgl.Popup();
    // Change the icon to a pointer icon when you mouse over a waste management facility
    map.on('mouseenter', 'EPA', e => {
        map.getCanvas().style.cursor = 'pointer';
        console.log(e.features[0].properties);
        popup.setLngLat(e.lngLat)
            .setHTML('<span class="popup-suburb">' + e.features[0].properties["Town Suburb"] + '</span><br>' + e.features[0].properties["Landfill Transfer Station"])
            .addTo(map);
    });

    // Change it back to a pan icon and remove the popup when it leaves.
    map.on('mouseleave', 'EPA', e => {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
    
});

// Create the geocoder and the scale bar, code adapted from GEOM90007 Lab 6
map.addControl(new MapboxGeocoder({
	accessToken: mapboxgl.accessToken,
    language: 'en-EN',
    mapboxgl: mapboxgl,
    collapsed: true
}));
map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.ScaleControl());
