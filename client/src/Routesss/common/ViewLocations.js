import React from "react";

class ViewLocations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentHub: {
        hub: null
      }
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log("bbb");
    console.log(nextProps);
    this.setState({
      currentHub: nextProps.currentHub
    });
  }

  render() {
    return (
      <div>
        <hr />
        <h2>Find Your Next Hub</h2>
        <h3>
        {this.state.currentHub.hub}
        </h3>
      </div>
    );
  }
}

export default ViewLocations;
