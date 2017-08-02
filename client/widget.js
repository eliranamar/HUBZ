	$(document).ready(function() {
	    // create a LatLng object containing the coordinate for the center of the map
	    var latlng = new google.maps.LatLng(-32.0504869, 34.7663172);
	    // prepare the map properties
	    var options = {
	        zoom: 15,
	        center: latlng,
	        mapTypeId: google.maps.MapTypeId.ROADMAP,
	        navigationControl: true,
	        mapTypeControl: false,
	        scrollwheel: false,
	        disableDoubleClickZoom: true
	    };

	    var slideIndex = 0;
	    carousel();

	    function carousel() {
	        var i;
	        var x = document.getElementsByClassName("mySlides");
	        for (i = 0; i < x.length; i++) {
	            x[i].style.display = "none";
	        }
	        slideIndex++;
	        if (slideIndex > x.length) { slideIndex = 1 }
	        x[slideIndex - 1].style.display = "block";
	        setTimeout(carousel, 2000); // Change image every 2 seconds
	    }



	    // initialize the map object
	    var map = new google.maps.Map(document.getElementById('google_map'), options);
	    // add Marker
	    var marker1 = new google.maps.Marker({
	        position: latlng,
	        map: map
	    });
	    // add listener for a click on the pin
	    google.maps.event.addListener(marker1, 'click', function() {
	        infowindow.open(map, marker1);
	    });
	    // add information window
	    var infowindow = new google.maps.InfoWindow({
	        content: '<div class="info"><strong>Routes</strong><br><br>Our company address is here<br> HaZerem 10 Tel Aviv, Israel</div>'
	    });
	});