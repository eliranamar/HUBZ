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
  <GoogleMap defaultZoom={6} center={props.center}>
    {props.markers.map((marker, index) =>
      <Marker
        key={index}
        position={marker.position}
        onClick={() => props.onMarkerClick(marker)}
      >
        {marker.showInfo &&
          <InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>
            <div>
              {marker.infoContent}
            </div>
          </InfoWindow>}
      </Marker>
    )}
    {/*<Polyline path={props.polyline} />*/}
    {props.polyline.map((path, index) =>
      <Polyline
        options={{ strokeColor: path.color, strokeWeight: path.strokeWeight, geodesic: true }}
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
      markersArr: [],
      place: props.place, // == object
      currentHub: {},
      // center: (99.0522346, 101.2436829),
      // ,

      paths: [
        {
          polyline: [
            { lat: -27.363882, lng: 137.044922 },
            { lat: -23.363882, lng: 129.044922 },
            { lat: -20.5107991, lng: 131.9081663 }
          ]
        },
        {
          polyline: [
            { lat: 8.5088733, lng: 76.909832 },
            { lat: 12.5100829, lng: 90.9087966 },
            { lat: 14.5107991, lng: 76.9081663 }
          ]
        }
      ],

      markers: [
        {
          position: new google.maps.LatLng(-27.363882, 137.044922),
          showInfo: false,
          infoContent: <p>hey hey</p>
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
    this.getRandomColor = this.getRandomColor.bind(this);
  }
  componentDidMount() {
    this.setState({
      center: new google.maps.LatLng(34.0522346, 20.2436829)
    });
  }

  getRandomColor() {
    var letters = "123456789ABCDE";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  componentWillReceiveProps(nextprops) {
    let templat = nextprops.place.geometry.location.lat();
    let templng = nextprops.place.geometry.location.lng();
    this.setState({
      center: new google.maps.LatLng(templat, templng)
    });
    if (this.props.paths !== nextprops.paths) {
      let allLocations = nextprops.paths;
      let fullpoly = [];
      for (var i = 0; i < allLocations.length; i++) {
        let tempPoly = { polyline: [], color: this.getRandomColor(), strokeWeight: ((Math.random()+0.5)*2) };
        for (var z = 0; z < allLocations[i].locations.length; z++) {
          let c = { lat: allLocations[i].locations[z].lat, lng: allLocations[i].locations[z].lng };
          tempPoly.polyline.push(c);
        }
        fullpoly.push(tempPoly);
      }

      this.setState({
        paths: fullpoly,
        currentHub: nextprops.currentHub
      });

      let fullMarker = [];

      for (var t = 0; t < allLocations.length; t++) {
        for (var r = 0; r < allLocations[t].locations.length; r++) {
          let lng = allLocations[t].locations[r].lat;
          let lat = allLocations[t].locations[r].lng;
          let tempMarker = {
            position: new google.maps.LatLng(lng, lat),
            showInfo: false,
            infoContent: allLocations[t].locations[r].name + " https://www.tripadvisor.com/"
          };
          fullMarker.push(tempMarker);
        }
      }

      this.setState({
        markers: fullMarker
      });
    }
  }

  handleMarkerClick(targetMarker) {
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
      <div className="row full-height" style={{ height: "100%" }}>
        <div className="col-md-12" style={{ height: "100%" }}>
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
            getRandomColor={this.getRandomColor}
          />
        </div>
      </div>
    );
  }
}

export default FindLocation;
