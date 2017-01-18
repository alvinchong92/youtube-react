import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const term = e.target.value;
    console.log(term);
    this.setState({
      term: term,
    })
  }
  render() {
    return(
      <div className="search-bar">
        <input
        onChange={this.handleChange}
        />
      </div>
    )
  }
}
