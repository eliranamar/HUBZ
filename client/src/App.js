import React from 'react';
import ReactDom from 'react-dom';
import Header from './WeatherApp/common/Header';
import Routesss from './Routes';
import {BrowserRouter} from 'react-router-dom';

class App extends React.Component {
  render() {
    console.log('connected');
    return (
      <BrowserRouter>
        <div>
          <Header/>
          <Routesss/>
        </div>
      </BrowserRouter>

    );
  }
}

ReactDom.render(
  <App/>, document.getElementById('react-app'));