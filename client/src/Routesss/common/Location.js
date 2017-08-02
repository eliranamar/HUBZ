import React from 'react';
import axios from "axios";
import LocationSearch from "./LocationSearch";
import { Route, Redirect } from "react-router-dom";

class Location extends React.Component {
  constructor(props) {
    super(props);
    // let trip = this.props.trip;
    this.state = {
      trip: {
        name: "amit",
        id: 3,
        type: 'Solo'
      }
    }
    // let trip = {};
    // trip.name = "amit";
    // trip.id = 3;
    // trip.type = 'Solo';
    console.log(this.state.trip);
    this.addLocation = this.addLocation.bind(this);
  }

  addLocation(e) {
    e.preventDefault();
    // console.log('testLOC');
    let location = {};
    location.trip_id = this.state.trip.id;
    // location.name = document.getElementById("location-name").value;
    axios.post("/trip/" + location.trip_id + "/addlocation", location)
      .then(function (response) {
        console.log('server responded');
        console.log(response.data);
        // data.id = response.data.insertId;
        // that.setState({ trip: data })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount() {
    let input = document.getElementById('searchInput');
    let autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.addListener('place_changed', function () {

      let place = autocomplete.getPlace();
      console.log(place);


      if (place.address_components) {
        for (var i = 0; i < place.address_components.length; i++) {
          if (place.address_components[i].types[0] == 'postal_code') {
            document.getElementById('postal_code').innerHTML = place.address_components[i].long_name;
          }
          if (place.address_components[i].types[0] == 'country') {
            document.getElementById('country').innerHTML = place.address_components[i].long_name;
          }
          if (place.address_components[i].types[0] == "locality") {
            document.getElementById('name').innerHTML = place.address_components[i].long_name;
          }
        }
        document.getElementById('location').innerHTML = place.formatted_address;
        // document.getElementById('location').innerHTML = place.formatted_address;
        document.getElementById('lat').innerHTML = place.geometry.location.lat();
        document.getElementById('lon').innerHTML = place.geometry.location.lng();
      } else {
        alert('please choose location from google list');
      }
    })
  }

  render() {
    return (
      <div id="location-box">
        <div className="center-block text-center">
          <form id="add-location" action="" onSubmit={this.addLocation}>
            <h3>Add Your Location!</h3>
            <h4>Please Search and choose from suggestions</h4>
            <fieldset>
              <input required id="searchInput" className="controls form-control" type="text" placeholder="Enter a location" />
            </fieldset>
            <br />
            <fieldset>
              <button name="submit" type="submit" className="btn btn-primary" id="contact-submit" data-submit="...Sending">Add Location To Trip !</button>
            </fieldset>
          </form>
          <ul id="geoData">
            <li>Full Address: <span id="location"></span></li>
            <li>Name: <span id="name"></span></li>
            <li>Postal Code: <span id="postal_code"></span></li>
            <li>Country: <span id="country"></span></li>
            <li>Latitude: <span id="lat"></span></li>
            <li>Longitude: <span id="lon"></span></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Location;