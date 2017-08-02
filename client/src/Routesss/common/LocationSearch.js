import React from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import SearchBox from "../../../../node_modules/react-google-maps/lib/places/SearchBox";


// Wrap all `react-google-maps` components with `withGoogleMap` HOC
// and name it GettingStartedGoogleMap

const GettingStartedGoogleMap = withGoogleMap(props =>
  <GoogleMap
    defaultZoom={3}
    defaultCenter={{ lat: -25.363882, lng: 131.044922 }}>
    <SearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      controlPosition={google.maps.ControlPosition.TOP_LEFT}
      onPlacesChanged={props.onPlacesChanged}
      inputPlaceholder="Customized your placeholder"
    />
  </GoogleMap>
);

// Then, render it:
class LocationSearch extends React.Component {
  render() {
    return (
      <div className="row" style={{ height: "100%" }}>
        <div style={{ height: "100%" }}>
          <GettingStartedGoogleMap
            containerElement={
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  justifyContent: "flex-end",
                  alignItems: "center"
                }}
              />
            }
            mapElement={
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0
                }}
              />
            }
          />
        </div>
      </div>
    );
  }
}

export default LocationSearch;