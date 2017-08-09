import React from "react";
import axios from "axios";
import TripFindEngine from "./TripFindEngine";
import { Link } from "react-router-dom";
import ViewLocations from "./ViewLocations";

class FindTrip extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      trips: {},
      currentHub: {
        hub: null,
        type: null
      },
      results: [],
      place: {}
    };
    // console.log(this.state.trip);

    this.findTripFunc = this.findTripFunc.bind(this);
    // this.redirectToMap = this.redirectToMap.bind(this);
  }

  // redirectToMap(e) {
  //   debugger
  //   e.preventDefault();
  //   render(){
  //     return (
  //       <Redirect to="/findlocation" />
  //     );
  //   }
  // }

  findTripFunc() {
    //! this func fetchs all trips that contains this location
    let that = this;
    let data = [];
    let typeA = ""
    if (document.querySelector('input[name = "trip-type"]:checked')) {
       typeA = document.querySelector('input[name = "trip-type"]:checked')
        .value;
    }
    // let listItems = this.props.trips.map(function (trip) {
    //   return (
    //     <li key={trip.name}>
    //
    //     </li>
    //   );
    // });
    // console.log(typeof(this.state.currentHub.hub));
    // data.name = document.getElementById("trip-name").value;
    // data.type = document.querySelector('input[name = "trip-type"]:checked').value;
    console.log(this.state.currentHub);
    if (!this.state.currentHub.hub) {
      alert("please choose valid hub");
      return;
    }

    let obj = {
      type: typeA,
      currentHub: this.state.currentHub
    };

    axios
      .post("/getnexthub", obj)
      .then(function(response) {
        that.setState({ trips: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  componentDidMount() {
    // after mount make input to auto complete
    let that = this;
    let input = document.getElementById("searchTripInput");
    let autocomplete = new google.maps.places.Autocomplete(input);

    autocomplete.addListener("place_changed", () => {
      let place = autocomplete.getPlace();
      this.setState({ place: place });
      let hub = {};
      console.log(place);
      for (let i = 0; i < place.address_components.length; i++) {
        if (place.address_components[i].types[0] == "locality") {
          hub.hub = place.address_components[i].long_name;
        }
      }
      if (place.address_components) {
        that.setState({ currentHub: hub });
      } else {
        alert("please choose location from google list");
      }
    });
  }
  render() {
    return (
      <div className="container" id="find-trip-box" style={{ height: "100%" }}>
        <div className="row text-center">
          <h1>Find Your Next Hub!</h1>
          <h3 style={{ color: "black" }}>
            Add your current or future location and choose between thousends of
            trips made by other travellers
          </h3>
          <fieldset>
            <p>Who are you Travelling with?</p>
            <label className="radio-inline">
              <input
                placeholder="Trip Name``"
                required
                id="type-couple"
                type="radio"
                name="trip-type"
                value="Couple"
              />Couple |
              <i className="fa fa-user" />
              <i className="fa fa-user" />
            </label>
            <label className="radio-inline">
              <input
                type="radio"
                id="type-friends"
                name="trip-type"
                value="FRIENDS"
              />Friends Group | <i className="fa fa-users" />
            </label>
            <label className="radio-inline">
              <input
                id="type-solo"
                type="radio"
                name="trip-type"
                value="Solo"
              />Solo Traveler |
              <i className="fa fa-user" />
            </label>
            <hr />

            <input
              required
              id="searchTripInput"
              className="controls form-control"
              type="text"
              placeholder="Enter Your Current Hub"
              autoFocus
            />
          </fieldset>
          <hr />
          <fieldset>
            <button
              onClick={this.findTripFunc}
              className="btn btn-warning btn-square btn-lg btn-block"
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
            >
              Submit
            </button>
          </fieldset>
        </div>
        <hr />
        <TripFindEngine
          place={this.state.place}
          trips={this.state.trips}
          redirectToMap={this.redirectToMap}
          currentHub={this.state.currentHub}
        />
        <ViewLocations
          place={this.state.place}
          trips={this.state.trips}
          currentHub={this.state.currentHub}
        />
      </div>
    );
  }
}

export default FindTrip;