import React from 'react';
import axios from "axios";
import LocationSearch from "./LocationSearch";
import { Route, Redirect } from "react-router-dom";

class Location extends React.Component {
  constructor(props) {
    super(props);
    let trip = this.props.trip;
    console.log(trip);
    this.state = {
      trip: trip,
      location: {}
    }
    // let trip = {};
    // trip.name = "amit";
    // trip.id = 3;
    // trip.type = 'Solo';
    console.log("trip ", this.state.trip);
    this.addLocation = this.addLocation.bind(this);
    // this.setLocationState = this.setLocationState.bind(this);
  }

  // setLocationState(location) {
  //   console.log(location);
  //   this.setState({ location: location })
  // }

  addLocation(e) {
    let that = this;
    e.preventDefault();
    if (!this.state.location.name) {
      alert('please choose location before submitting');
      return;
    }
    let location = this.state.location; //TODO make this change state nicer
    location.trip_id = this.state.trip.id;
    this.setState({ location: location });
    // console.log(this.state.location);
    // console.log('testLOC');
    // location.name = document.getElementById("location-name").value;
    axios.post("/trip/" + location.trip_id + "/addlocation", location)
      .then(function (response) {
        console.log('server responded');
        console.log(response.data);
        document.getElementById('searchInput').value = "";
        that.setState({location: {}})
        // data.id = response.data.insertId;
        // that.setState({ trip: data })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount() {
    // let that = this;
    let input = document.getElementById('searchInput');
    let autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.addListener('place_changed', () => {

      let place = autocomplete.getPlace();
      console.log(place);

      if (place.address_components) {
        let location = {};
        for (var i = 0; i < place.address_components.length; i++) {
          if (place.address_components[i].types[0] == 'country') {
            location.country = place.address_components[i].long_name;
            document.getElementById('country').innerHTML = place.address_components[i].long_name;
          }
          if (place.address_components[i].types[0] == "locality") {
            location.name = place.address_components[i].long_name;
            document.getElementById('name').innerHTML = place.address_components[i].long_name;
          }
        }
        if (place.name) {
          document.getElementById('name').innerHTML = place.name;
          location.name = place.name;
        }
        location.lat = place.geometry.location.lat();
        location.lng = place.geometry.location.lng();
        console.log(location);
        // document.getElementById('location').innerHTML = place.formatted_address;
        // document.getElementById('location').innerHTML = place.formatted_address;
        document.getElementById('lat').innerHTML = place.geometry.location.lat();
        document.getElementById('lon').innerHTML = place.geometry.location.lng();
        this.setState({ location: location });
      } else {
        alert('please choose location from google list');
      }
    });
  }

  render() {
    return (
      <div id="location-box">
        <div className="center-block text-center">

          <h3>Add Your Location!</h3>
          <h4>Please Search and choose from suggestions</h4>
          <fieldset>
            <input required id="searchInput" className="controls form-control" type="text" placeholder="Enter a location" />
          </fieldset>
          <br />
          <fieldset>
            <button name="submit" type="submit" className="btn btn-primary" onClick={this.addLocation} id="contact-submit" data-submit="...Sending">Add Location To Trip !</button>
          </fieldset>

          <hr />
          <ul id="geoData" style={{listStyleType: 'none'}}>
            {/* <li>Full Address: <span id="location"></span></li> */}
            <li>Name: <span id="name"></span></li>
            <li>Country: <span id="country"></span></li>
            <li>Latitude: <span id="lat"></span></li>
            <li>Longitude: <span id="lon"></span></li>
          </ul>
        </div>
      </div >
    );
  }
}

export default Location;