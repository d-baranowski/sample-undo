import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    inputValue: "",
    values: [],
    prevValues: []
  };

  handleChange = (e) => {
    const input = e.target.value;
    this.setState({
      inputValue: input
    })
  };

  addElement = () => {
    this.setState({
      prevValues: [...this.state.prevValues, this.state.values],
      values: [...this.state.values, this.state.inputValue]
    })
  };

  undo = () => {
    this.setState({
      values: this.state.prevValues[this.state.prevValues.length - 1],
      prevValues: this.state.prevValues.slice(0, this.state.prevValues.length - 1)
    })
  };

  componentWillMount() {
    console.log("I'm about to be rendered for the very first time!")
  }

  componentDidMount() {
    console.log("I have just rendered for the very first time!")
  }

  render() {

    return (
        <div className="App">
          {this.state.inputValue}
          <br/>
          <input
              value={this.state.inputValue}
              onChange={this.handleChange}
          />
          <button onClick={this.addElement}>Add</button>
          {
            this.state.values.map((value) =>
                (<div>{value}</div>)
            )
          }

          <button onClick={this.undo}>Undo</button>

        </div>
    );
  }
}

export default App;
