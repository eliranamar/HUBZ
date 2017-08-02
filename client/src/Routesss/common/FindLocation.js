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
    defaultCenter={{ lat: 34.0522346, lng: -118.2436829 }}
  >
    >
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
        options={{ strokeColor: "blue", geodesic: true }}
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

      center: {
        lat: 34.0522346,
        lng: -118.2436829
      },
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
  }

  componentDidMount() {
    const allLocations = [
      {
        id: 3,
        country: "United States",
        name: "Los Angeles",
        lng: 34.0522346,
        lat: -118.2436829,
        trip_id: 2
      },
      {
        id: 4,
        country: "United States",
        name: "San Francisco",
        lng: 37.774929,
        lat: -122.4194183,
        trip_id: 2
      },
      {
        id: 5,
        country: "United States",
        name: "Seattle",
        lng: 47.6062088,
        lat: -122.3320694,
        trip_id: 2
      }
    ];
    let tempArr = [];

    for (var i = 0; i < allLocations.length; i++) {
      let lat = allLocations[i].lat;
      let lng = allLocations[i].lng;

      let obj = {
        position: new google.maps.LatLng(lng, lat),
        showInfo: false,
        infoContent: `<p>${allLocations[i].name}</p>`
      };
      tempArr.push(obj);
    }

    function extend(obj, src) {
      for (var key in src) {
        if (src.hasOwnProperty(key)) obj[key] = src[key];
      }
      return obj;
    }
    let tempPoly = [
      {polyline: []}
    ];

    for (var z = 0; z < allLocations.length; z++) {
      let lngA = { lat: allLocations[z].lng };
      let latA = { lng: allLocations[z].lat };
      var c = extend(latA, lngA);
      tempPoly[0].polyline.push(c);
    }
          console.log(tempPoly);
          this.setState({
            paths: tempPoly
          })


    // paths: [
    //         {
    //           polyline: [
    //             { lat: -27.363882, lng: 137.044922 },
    //             { lat: -23.363882, lng: 129.044922 },
    //             { lat: -20.5107991, lng: 131.9081663 }
    //           ],
    //           color: "blue"
    //         },

    this.setState({
      markers: tempArr
    });
  }

  handleMarkerClick(targetMarker) {
    console.log(targetMarker);

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
