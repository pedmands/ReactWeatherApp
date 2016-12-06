import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name
    return (
      <tr key={name}>
      <td>
      {name}
      </td>
      </tr>
    );
  }

  render(){
    return (
      <table className="table table-hover">
      <thead>
      <tr>
      <th>City</th>
      <th>Temperature</th>
      <th>Conditions</th>
      <th>Humidity</th>
      </tr>
      </thead>
      <tbody>
        {this.props.weather.map(this.renderWeather)}
      </tbody>
      </table>
    );
  }
} // WeatherList

function mapStateToProps({weather}) {
  // We're using {weather} - which is equivelent to { weather: weather } because we assigned the WeatherReducer
  // to the 'weather' key in combineReducers:
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
