import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};

    this.onInputChange = this.onInputChange.bind(this);
    // binds this to onInputChange function, below,
    // thus overriding the this.setState method in the function
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  render(){
    return (
      <form className="input-group">
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
