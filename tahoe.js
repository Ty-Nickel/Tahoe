$(document).ready(function() {
	
	$('button').click(function() {
		var city = $(this).data('loc');
		//get weather for city
		//call getWeather() pass city as parameter
		//draw the map with marker
		getWeather(city);
		
		var lat = $(this).data('lat');
		
		var lng = $(this).data('lng');
		
		
		

/*
	MapOnThePage = new google.maps.Map(
		document.getElementById('map-canvas'),
			//mapOptionsObject
	);
*/

});
		

		
		
		
/*
  $.ajax({
  url : "http://api.wunderground.com/api/a4520f6b8ee85215/geolookup/conditions/q/CA/South_Lake_Tahoe.json",
  dataType : "jsonp",
  success : function(parsed_json) {
  var location = parsed_json['location']['city'];
  var temp_f = parsed_json['current_observation']['temp_f'];
  alert("Current temperature in " + location + " is: " + temp_f);
  }
  });
*/
});

function main(button){
	
	
}
	var tahoe = new google.maps.LatLng(38.9400, 119.9769);

	var resorts = [
		new google.maps.LatLng(38.9353, 119.9400), //Heavenly Valley
		new google.maps.LatLng(38.5806, 90.4142), //Kirkwood
		new google.maps.LatLng(38.8002, 120.0806), //Sierra at Tahoe
		new google.maps.LatLng(39.2733, 120.1025), //Northstar
		new google.maps.LatLng(39.1882, 120.2639), //Squaw
		new google.maps.LatLng(39.1786, 120.2277) //Alpine Meadows				
		];
		
	var markers = [];
	var iterator = 0;
	
	var map;
	
	function initialize () {
	var mapOptions = {
		zoom: 12, 
		center: tahoe
		
		};
		
	var	map = new google.maps.Map(document.getElementById('map-canvas'),
			mapOptions);
			
/*
	var image = 
			
		}
*/
		
/*
	function drop () {
		for (var i = 0; i < neighborhood.length; i++) {
			setTimeout (function() {
				addMarker
			} i * 200);
		}
	}
*/
	
/*
	function addMarker (){
		markers.push(new google.Maps.Marker({
			position: neighborhoods[iterator],
			map: map,
			draggable: false,
			animation google.maps.Animation.BOUNCE
		}));
		iterator++;
		*/
	}


google.maps.event.addDomListener(window, 'load', initialize);

//This function gets the weather from weather underground. It returns two weather objects. 
function getWeather(city) {
	$.ajax({
		  url : "http://api.wunderground.com/api/a4520f6b8ee85215/geolookup/conditions/q/CA/"+city+".json",
		  dataType : "jsonp",
		  success : function(parsed_json) {
		  console.log(parsed_json);
		  var location = parsed_json['location']['city'];
		  var temp_f = parsed_json['current_observation']['temp_f'];
		  alert("Current temperature in " + location + " is: " + temp_f);
		  drawMap(parsed_json);
		  }
	});
}

//This function draws the google map. It takes the weather object, gets the location, and plots a marker with weather data. 
function drawMap(weatherObject) {
	var lat = weatherObject.location.lat;
	console.log(lat);

	var lng = weatherObject.location.lon;
	var Latlng = new google.maps.LatLng(lat, lng);
	var mapOptions = {
		zoom: 6,
		center: Latlng
	}
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	
	var marker = new google.maps.Marker({
		position: Latlng,
		map: map,
		title: 'Hi there!'
	});
}
	
google.maps.event.addDomListener(window, 'load', initialize);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	