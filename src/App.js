import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { name: 'Max', age: 27 },
        { name: 'Sam', age: 24 },
        { name: 'Tim', age: 52 }
      ]
    }
  }
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 27 },
        { name: 'Sam', age: 24 },
        { name: 'Timo', age: 25 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <p>Hello React!</p>
          <button className='btn' onClick={this.switchNameHandler.bind(this, 'Maximilian!!')}>Switch Name</button> {/*Passed method reference using bind*/}
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={() => this.switchNameHandler('Max!!!')} /> {/*Passed method reference using arrow*/}
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
      // React.createElement('div', {className: 'App'}, React.createElement('h1', null, `Hello React!!!!`))
    )
  };

}

export default App;
