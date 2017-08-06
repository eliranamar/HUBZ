import React from 'react';
import ReactDom from 'react-dom';
import Header from './Routesss/common/Header';
import Routesss from './Routes';
import {BrowserRouter} from 'react-router-dom';

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      trip: {
        name: null,
        type: null,
        id: null
      }
    }

    this.setTripState = this.setTripState.bind(this);
  }

  setTripState(trip) {
		this.setState({ trip: trip });
  }
  
  render() {
    // console.log('connected');
    return (
      <BrowserRouter>
        <div id="root" style={{ height: "100%" }}>
          <Header trip={this.state.trip}/>
          <Routesss trip={this.state.trip} setTripState={this.setTripState}/>
        </div>
      </BrowserRouter>

    );
  }
}

ReactDom.render(
  <App/>, document.getElementById('react-app'));