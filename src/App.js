import logo from './logo.svg';
import './App.css';
import React from 'react';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
  );
}
*/


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      message: "Hello World!",
      logo: logo,
      newTodo: ''
    }

  }

  newTodoOnChange(e) {
    console.log(e.target.value)
    this.setState({
      newtodo: e.target.value
    })
  }

  formSubmitted(event) {
    event.preventDefault();
    console.log(`Form submitted! ${this.state.newtodo}`);
  }

  render() {
    return (
      <div className="App">
        { /* <img src={this.state.logo} className="App-logo" alt="logo" /> */ }
        <p></p>
        <h1>{this.state.message}</h1>
        <form onSubmit={e => this.formSubmitted(e)}>
          <label htmlFor="newTodo" >New Todo</label>
          <input onChange={e => this.newTodoOnChange(e)} id="newTodo" name="newTodo" />
          <button type="submit">Add todo  </button>
        </form>
      </div>
    )
  }

}

export default App;
