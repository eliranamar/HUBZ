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
    defaultCenter={{ lat: 30.650589, lng: -80.437012 }}
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

  componentWillReceiveProps(nextprops) {
    if (this.props.paths !== nextprops.paths) {
      let allLocations = nextprops.paths[4];
      // const allLocations = nextprops.paths[4];
      console.log(allLocations);

      let tempArr = [];

      for (var i = 0; i < allLocations.length; i++) {
        let lng = allLocations[i].lat;
        let lat = allLocations[i].lng;
        console.log(lat);
        let obj = {
          position: new google.maps.LatLng(lng, lat),
          showInfo: false,
          infoContent: allLocations[i].name
        };
        tempArr.push(obj);
      }

       
      let tempPoly = [{ polyline: [] },{ polyline: [] }]; //! need to get array of arrays. fix this in server.js

      for (var z = 0; z < allLocations.length; z++) {
        let c = { lat: allLocations[z].lat , lng: allLocations[z].lng };
        let c1 = { lat: allLocations[z].lng , lng: allLocations[z].lat*(-1) };
        tempPoly[0].polyline.push(c);
        tempPoly[1].polyline.push(c1);
      }

      this.setState({
        paths: tempPoly
      });

      this.setState({
        markers: tempArr
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
          />
        </div>
      </div>
    );
  }
}

export default FindLocation;import React from "react";
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
    defaultCenter={{ lat: 30.650589, lng: -80.437012 }}
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

  componentWillReceiveProps(nextprops) {
    if (this.props.paths !== nextprops.paths) {
      let allLocations = nextprops.paths[4];
      // const allLocations = nextprops.paths[4];
      console.log(allLocations);

      let tempArr = [];

      for (var i = 0; i < allLocations.length; i++) {
        let lng = allLocations[i].lat;
        let lat = allLocations[i].lng;
        console.log(lat);
        let obj = {
          position: new google.maps.LatLng(lng, lat),
          showInfo: false,
          infoContent: allLocations[i].name
        };
        tempArr.push(obj);
      }

       
      let tempPoly = [{ polyline: [] },{ polyline: [] }];

      for (var z = 0; z < allLocations.length; z++) {
        let c = { lat: allLocations[z].lat , lng: allLocations[z].lng };
        let c1 = { lat: allLocations[z].lng , lng: allLocations[z].lat*(-1) };
        tempPoly[0].polyline.push(c);
        tempPoly[1].polyline.push(c1);
      }

      this.setState({
        paths: tempPoly
      });

      this.setState({
        markers: tempArr
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
          />
        </div>
      </div>
    );
  }
}

export default FindLocation;