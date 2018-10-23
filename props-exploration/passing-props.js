// How to pass Props from child to parent Component?
// This a common question for React newcomers and the answer for it is brief:
// there is no way to pass props from a child to a parent component.
// Let’s revisit the previous example,
// but this time with an additional Button component for the toggle mechanism
import React, { Component } from 'react';

class App extends Component {
  render() {
    const greeting = 'Welcome to React';

    return (
      <div>
        {isShow ? <Greeting greeting={greeting} /> : null}

        <Button />
      </div>
    );
  }
}

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShow: true
    };
  }

  toggleShow = () => {
    this.setState(state => ({ isShow: !state.isShow }));
  };

  render() {
    return (
      <button onClick={this.toggleShow} type="button">
        Toggle Show
      </button>
    );
  }
}

const Greeting = ({ greeting }) => <h1>{greeting}</h1>;

export default App;

// So far, the Button component manages its own co-located state. 
// Since the Button component manages the isShow property, there is no way 
// to pass it up as props to the App component. 
// The App component needs the isShow property though for 
// the conditional rendering of the Greeting component. 
// At the moment, the application wouldn’t work this way. 
// That’s the point when you have to lift state up for making it accessible 
// for other components (in this case the App component itself) 
// as state (or as passed props for other components).

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShow: true,
    };
  }

  toggleShow = () => {
    this.setState(state => ({ isShow: !state.isShow }));
  };

  render() {
    const greeting = 'Welcome to React';

    return (
      <div>
        {this.state.isShow ? <Greeting greeting={greeting} /> : null}

        <Button onClick={this.toggleShow} />
      </div>
    );
  }
}

const Button = ({ onClick }) => (
  <button onClick={onClick} type="button">
    Toggle Show
  </button>
);

const Greeting = ({ greeting }) => <h1>{greeting}</h1>;

export default App;

// The important ingredient is that the App component passes down a function 
// in the props to the Button component now.
// The function is used for the click handler in the Button component.
// However, the Button doesn’t know the business logic of the function,
// only that it has to trigger the function when the button gets clicked.
// Above in the App component, the state is changed when the 
// passed function is called, and thus all affected components,
// which use the changed state or consume it as props, render again
// Now you can even pass the state as props to the Greeting component.

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShow: true,
    };
  }

  toggleShow = () => {
    this.setState(state => ({ isShow: !state.isShow }));
  };

  render() {
    const greeting = 'Welcome to React';

    return (
      <div>
        <Greeting greeting={greeting} isShow={this.state.isShow} />

        <Button onClick={this.toggleShow} />
      </div>
    );
  }
}

const Button = ({ onClick }) => (
  <button onClick={onClick} type="button">
    Toggle Show
  </button>
);

const Greeting = ({ greeting, isShow }) =>
  isShow ? <h1>{greeting}</h1> : null;

export default App;

// As said, there is no way passing props from a child to a parent component. 
// But you can always pass functions from parent to child components, 
// whereas the child components make use of these functions and the functions 
// may change the state in a parent component above. 
// Once the state has changed, the state is passed down as props again. 
// All affected components will render again. 
// For instance, the same pattern applies for having page components 
// in your React application. Once you want to pass data from page to another 
// in React, you can lift the state up to the component (usually App component)
// which has all page components as its child components.
// Then the data is managed as state in the top level component but 
// still can be distributed to all child components.