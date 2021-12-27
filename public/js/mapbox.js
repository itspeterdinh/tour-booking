/* eslint-disable*/
export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoicGV0ZXJkaW5oOTQiLCJhIjoiY2t4amJwMjRrMG9pODJ3cGVyNWwxYTR1aiJ9.nW5ga2Ny38zQw5e6kLxmLA';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/peterdinh94/ckxji805hbkby15mp01qfwfzk',
    scrollZoom: false
    //   center: [-121.95336695016951, 37.31222530444375],
    //   zoom: 4,
    //   interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    // Ceate marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day} : ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });
  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};
