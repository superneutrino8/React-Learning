import React, { Component } from 'react';
import './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: 'asd1', name: 'Max', age: 27 },
        { id: 'asd2', name: 'Sam', age: 24 },
        { id: 'asd3', name: 'Tim', age: 52 }
      ],
      toggleView: false
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

  nameChangedHandler = (event, id) => {

    //First make changes in local object then makes that changes in state object

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
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
          <Cockpit 
            persons={this.state.persons}
            switch={this.switchNameHandler}
            view={this.toggleView}
            click={this.toggleViewFunc}
            alt={this.state.toggleView.toString()}
          />
          {
            this.state.toggleView ?
              <Persons
                persons={this.state.persons}
                click={this.deleteTextHandler}
                changed={this.nameChangedHandler}
              />
              : null
          }
          <br />
        </header>
      </div>
      // React.createElement('div', {className: 'App'}, React.createElement('h1', null, `Hello React!!!!`))
    )
  };

}

export default App;
