import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};

    // bind this to onInputChange function,
    // thus overriding the this.setState method in the function
    this.onInputChange = this.onInputChange.bind(this);

    // bind this to onFormSubmit function...
    // "
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();

    // fetch weather data with fetchWeather Action Creator:
    this.props.fetchWeather(this.state.term);
    // set term to empty string, and re-render input:
    this.setState({term: ''});
  }

  render(){
    return (
      <form
        onSubmit={this.onFormSubmit}
        className="input-group">
        <input
          placeholder="Search for a city to see a five-day forecast..."
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-info">Submit</button>
        </span>
      </form>
    );
  }
}// SearchBar

// flows Action down through Middleware and into reducers
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// passing null as mapStateToProps in order to pass mapDispatchToProps as second argument:
export default connect(null, mapDispatchToProps)(SearchBar);
