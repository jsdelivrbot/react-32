import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other vallue',
    showPersons: false
  }

  nameChangedHandler = (event) => {
    // Inline styling, not good for standard styling, only used for one object
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    // alternative way of copying an array is, which is more modern: const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    const style = {
      backgroundColor: 'lightBlue',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age} />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React app!</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
      </div>
    );
  }
}

export default App;
