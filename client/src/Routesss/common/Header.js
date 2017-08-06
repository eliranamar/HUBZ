import React from 'react';
import { Link } from 'react-router-dom';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      trip : props.trip
    }
  }

  shouldComponentUpdate(){
  return true;
  }

  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">React-Website</Link>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li role="presentation"><Link to="/">Home</Link></li>
              <li role="presentation"><Link to="/findtrip">Find Trip</Link></li>
              <li role="presentation"><Link to="/trip">Create Trip</Link></li>
              <li role="presentation"><Link to="/about">About</Link></li>
              <li role="presentation"><Link to="/contact">Contact</Link></li>
              { this.state.trip.id ? <li>Current Trip ID: {this.state.trip.id}</li> : null }
            </ul>
          </div>
        </div>
      </nav>

    );
  }
}

export default App;