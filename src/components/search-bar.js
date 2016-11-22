import React, {Component} from 'react';



class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'initial text'
    }
  }

  render() {
    return (
      <div>
        <input
          value={this.state.title}
          // onChange={this.onInputChange}
          onChange={(event) => this.setState({title: event.target.value})}
        />
        <h2>{this.state.title}</h2>
      </div>
    );
  }
  // onInputChange(event) {
  //   this.setState({title: event.target.value});
  // }

}

export default SearchBar;
