import React from "react";

class FindLocation extends React.Component {

render(){

   function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }
    return(
     <div id="map">
         <p>dsfuuysdf</p>
     </div>

    )
}


}

export default FindLocation