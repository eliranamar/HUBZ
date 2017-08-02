import React from "react";
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import SearchBox from "../../../../node_modules/react-google-maps/lib/places/SearchBox";
import Polyline from "../../../../node_modules/react-google-maps/lib/Polyline";

// Wrap all `react-google-maps` components with `withGoogleMap` HOC
// and name it GettingStartedGoogleMap

const GettingStartedGoogleMap = withGoogleMap(props =>
  <GoogleMap
    defaultZoom={4}
    defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
  >
    >
    {props.markers.map((marker, index) =>
      <Marker
        key={index}
        position={marker.position}
        onClick={() => props.onMarkerClick(marker)}
      >
           {marker.showInfo && (
          <InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>
            <div>{marker.infoContent}</div>
          </InfoWindow>
        )}
      </Marker>
    )}
    {/*<Polyline path={props.polyline} />*/}
    {props.polyline.map((path, index) =>
      <Polyline
        options={{ strokeColor: path.color, geodesic: true }}
        key={index}
        path={path.polyline}
      />
    )}
  </GoogleMap>
);

// Then, render it:
class FindLocation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      center: {
        lat: -25.363882,
        lng: 131.044922
      },
      // ,

      paths: [
        {
          polyline: [
            { lat: -27.363882, lng: 137.044922 },
            { lat: -23.363882, lng: 129.044922 },
            { lat: -20.5107991, lng: 131.9081663 }
          ],
          color: "blue"
        },
        {
          polyline: [
            { lat: 8.5088733, lng: 76.909832 },
            { lat: 12.5100829, lng: 90.9087966 },
            { lat: 14.5107991, lng: 76.9081663 }
          ],
          color: "red"
        }
      ],

      markers: [
        {
          position: new google.maps.LatLng(-27.363882, 137.044922),
          showInfo: false,
          infoContent: (<p>hey hey</p>)
        },
        {
          position: new google.maps.LatLng(-23.363882, 129.044922),
          showInfo: false,
          infoContent: (
            <svg
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            />
          )
        }
      ]
      
    };
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.handleMarkerClose = this.handleMarkerClose.bind(this);
  };

  

  handleMarkerClick(targetMarker) {
    console.log(targetMarker)


    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: true
          };
        }
        return marker;
      })
    });
  }

  handleMarkerClose(targetMarker) {
    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: false
          };
        }
        return marker;
      })
    });
  }


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
            center={this.state.center}
            markers={this.state.markers}
            polyline={this.state.paths}
            onMarkerClick={this.handleMarkerClick}
            onMarkerClose={this.handleMarkerClose}
         
          />
        </div>
      </div>
    );
  }
}

export default FindLocation;

