import React from "react";
import axios from "axios";
import TripFindEngine from "./TripFindEngine";
import { Link } from "react-router-dom";

class FindTrip extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      trips: {},
      currentHub: {
        hub: null
      },
      results: []
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
    axios
      .post("/getnexthub", this.state.currentHub)
      .then(function(response) {
        // console.log('testttt');
        // console.log(response.data);
        that.setState({ trips: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  componentDidMount() {
    //? after mount make input to auto complete
    let that = this;
    let input = document.getElementById("searchTripInput");
    let autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.addListener("place_changed", () => {
      let place = autocomplete.getPlace();
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
          <h3>What is your current location?</h3>
          <h4>Search for your next Hub :)</h4>
          <fieldset>
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
              className="btn btn-success btn-square"
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
          trips={this.state.trips}
          redirectToMap={this.redirectToMap}
          currentHub={this.state.currentHub}
        />
      </div>
    );
  }
}

export default FindTrip;