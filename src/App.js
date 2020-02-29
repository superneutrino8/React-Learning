import React, { Component } from 'react';
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
    
    const btnStyle = {
      background: '#4CAF50',
      color: 'white',
      border: '1px solid #D32F2F',
      padding: '18px',
      cursor: 'pointer'
    }

    const classes = [];

    if(this.state.persons.length <= 2)
      classes.push('red');

    if(this.state.persons.length <= 1)
      classes.push('bold');

    return (
      <div className="App">
        <header className="App-header">
          <p className={classes.join(' ')}>Hello There, This is React</p>
          <button onClick={this.switchNameHandler.bind(this, 'Maximilian!!')}>Switch Name</button> {/*Passed method reference using bind*/}
          <br></br>
          <button style={btnStyle} onClick={this.toggleViewFunc}>Toggle Persons</button> {/*Conditional View*/}
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
                    changed={(event) => this.nameChangedHandler(event, person.id)}
                  />
                })}
                {
                  btnStyle.background = '#D32F2F'
                }
              </div>
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
