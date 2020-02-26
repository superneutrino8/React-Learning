import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: 'asd1', name: 'Max', age: 27 },
        { id: 'asd2', name: 'Sam', age: 24 },
        { id: 'asd3', name: 'Tim', age: 52 }
      ],
      toggleView: true
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

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 27 },
        { name: event.target.value, age: 24 },
        { name: 'Manu', age: 25 }
      ]
    })
  }

  toggleViewFunc = () => {
    const tempValue = this.state.toggleView;
    this.setState({ toggleView: !tempValue })
  }

  deleteTextHandler = (index) => {
    const temp = [...this.state.persons]; //making copy of original state because we need to preserve original state as a part of React efficiency
    temp.splice(index, 1); 
    this.setState({
      persons: temp
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
          <br></br>
          <button className='btn' onClick={this.toggleViewFunc}>Toggle Persons</button> {/*Conditional View*/}
          {
            this.state.toggleView ?
              <div>
                {/* <Person
                  name={this.state.persons[0].name}
                  age={this.state.persons[0].age} />
                <Person
                  name={this.state.persons[1].name}
                  age={this.state.persons[1].age}
                  click={() => this.switchNameHandler('Max!!!')}
                  changed={this.nameChangedHandler} /> {/*Passed method reference using arrow*/}
                {/* <Person
                  name={this.state.persons[2].name}
                  age={this.state.persons[2].age} /> */}
                {this.state.persons.map((person, index) => {
                  return <Person
                    click={() => this.deleteTextHandler(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                  />
                })}
              </div>
              : null
          }
          <br />
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
