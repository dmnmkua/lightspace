function initMap() {
  var options = {
    center: { lat: 55.7533576, lng: 37.6667382 },
    zoom: 17,
    disableDefaultUI: true,
    styles: [
      {
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "saturation": -100
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
    ]
  }
  var map = new google.maps.Map(document.getElementById('map'), options);
  var marker = new google.maps.Marker({
      position: { lat: 55.7533576, lng: 37.6667382 },
      map: map,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 10
      }
  });
};
