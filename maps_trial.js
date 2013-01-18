function codeAddress() {
        var address = $("#address").val();
        var geocoder = new google.maps.Geocoder();

        geocoder.geocode( {'address': address}, function(results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                        createMap(results[0].geometry.location);
                }
                else {
                        alert("Geocode failed: " + status);
                }
        });
}


function createMap(location) {

    var mapOptions = {
        center: location,
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    var marker = new google.maps.Marker({map: map, position: location});

    var restaurantRequest = {
        location: location,
        radius: 2000,
        types: ['restaurant']
    };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(restaurantRequest, function(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        }
    });
}