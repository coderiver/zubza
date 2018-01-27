import dot from 'dot';
import PubSub from 'pubsub-js';
function gmap() {
  if(!$('.js-popup-map')[0]) return;

	
  let EasyGoogleMaps = require('easygooglemaps');
  let places = [];
  let mapOptions = {
    map: {
      APIKEY: 'AIzaSyDI1TIxHr1jJvu5DcgfqmYSJz-Goa9HHSw',
      container: '.js-popup-map',
      options: {
        center: {
          lat: 50.413959,
          lng: 30.545514
        },
        zoom: 8
      }
    },

    infobox: {
      class: 'awesome-infobox',
      template: '#infobox',
      closeButton: '.js-infobox-close',
      onlyOneBox: true, 
      position: {
        x: 'top',
        y: 'top'
      },
      style: {
        width: '220px',
        height: '150px'
      }
    },
    markers: {
      items: [
        {
          'content': {
					
            'title': 'Стоматология «Все Свои»',
            'text': 'Лечение кариеса',
            'price': 'от 1000 руб.'
          },
          'marker': {
            'position': {
              'lat': 50.413959,
              'lng': 30.545514
            },
            'icon': {
              'default': 'img/map-marker-default.png',
              'active': 'img/map-marker-active.png',

              'size': {
                'x': 38,
                'y': 44
              },
              'centering': {
                'x': 38,
                'y': 44
              }
            }
          }
        },
        {
          'content': {
					
            'title': 'Стоматология «Все Свои1»',
            'text': 'Лечение кариеса',
            'price': 'от 1000 руб.'
          },
          'marker': {
            'position': {
              'lat': 50.103959,
              'lng': 30.035514
            },
            'icon': {
              'default': 'img/map-marker-default.png',
              'active': 'img/map-marker-active.png',

              'size': {
                'x': 38,
                'y': 44
              },
              'centering': {
                'x': 38,
                'y': 44
              }
            }
          }
        }
      ]
    }
  };

  let myMap = new EasyGoogleMaps(mapOptions);

  let token = PubSub.subscribe('open-map-popup', initMap);
  function initMap() {
    myMap.init();
  };
	


 	// myMap.onload(function() {


 	// 	for (let i = 0; i < places.length; i++) {
 	// 		myMap.add({
 	// 			'content': {
 	// 				'title': places[i].title,
 	// 				'sec': places[i].adress
 	// 			},
 	// 			'marker': {
 	// 				'id': places[i].markerId,
 	// 				'position': {
 	// 					'lat': places[i].lat,
 	// 					'lng': places[i].lng
 	// 				},
 	// 				'icon': {
 	// 					'default': 'img/map-marker.png',
 	// 					'active': 'img/marker-open.png',
 	// 					'size': {
 	// 						'x': 18,
 	// 						'y': 18
 	// 					},
 	// 					'centering': {
 	// 						'x': 18,
 	// 						'y': 18
 	// 					}
 	// 				}
 	// 			}
 	// 		});

 	// 	};
 	// });

 	// function createMapMarkersArr() {
 	// 	let mapPoints = $('.js-map-data-link');
 	// 	places.length = 0;
 	// 	mapPoints.each(function(index, el) {
 	// 		let elem = $(el);
 	// 		let pointData = {
 	// 			markerGroup: elem.attr('data-marker-group'),
 	// 			markerId: elem.attr('data-id'),
 	// 			title: elem.attr('data-title'),
 	// 			adress: elem.html(),
 	// 			lat: +elem.attr('data-lat'),
 	// 			lng: +elem.attr('data-lng')
 	// 		};
 	// 		places.push(pointData);

 	// 	});
 	// };

 	// $('.js-dropdown-map-btn').on('click', function(e) {
 	// 	e.preventDefault();

 	// 	let $this = $(this),
 	// 	parent = $this.parent('.js-dropdown-map'),
 	// 	groupToShow = $this.attr('data-marker-group-toShow');

 	// 	for (let i = 0; i < places.length; i++) {
 	// 		myMap.hide(places[i].markerId);
 	// 		if(places[i].markerGroup == groupToShow) myMap.show(places[i].markerId);
 	// 	}

 	// 	if(!parent.hasClass('is-open')) {

 	// 		$('.js-dropdown-map').removeClass('is-open');
 	// 		$('.js-dropdown-map-content').slideUp(200);
 	// 		$this.next('.js-dropdown-map-content').slideDown(200);
 	// 		parent.addClass('is-open');

 	// 	}else{

 	// 		$this.next('.js-dropdown-map-content').slideUp(200);
 	// 		parent.removeClass('is-open');

 	// 	};
 	// });

 	// $('.js-map-data-link').on('click', function(e) {

 	// 	e.preventDefault();

 	// 	let $this = $(this),
 	// 	lat = + $this.attr('data-lat'),
 	// 	lng = + $this.attr('data-lng'),
 	// 	markerId = $this.attr('data-id');

 	// 	myMap.realmap.setCenter({lat: lat, lng: lng});

 	// 	for (let i = 0; i < myMap._markers.length; i++) {

 	// 		if(myMap._markers[i].id == markerId) {
 	// 			new google.maps.event.trigger( myMap._markers[i], 'click' );
 	// 		}


 	// 	};

 	// 	$('.js-map-data-link').removeClass('is-active');
 	// 	$this.addClass('is-active');
 	// });


  //
};
module.exports = gmap;
