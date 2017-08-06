import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import FindLocation from "./FindLocation";

class TripFindEngine extends React.Component {
  constructor(props) {
    super(props);
    this.state = { paths: props.trips };
  }

componentWillReceiveProps(nextProps){
 // console.log(nextProps);
 this.setState({paths:nextProps.trips})
}
  render() {

    return (
      <div style={{ height: "100%" }}>
          <FindLocation paths={this.props.trips} />
      </div>
    );
  }
}

export default TripFindEngine;