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
}