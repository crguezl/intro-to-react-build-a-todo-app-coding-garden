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

class Todo {
  constructor({title, done}) {
    this.title = title;
    this.done = done;
  }
}

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      message: "Hello World!",
      newTodo: '',
      todos: [
        new Todo({ title: "Learn React", done: false}),
        new Todo({ title: "Learn JSX", done: false})
      ]
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
    this.setState({
      todos: [ ...this.state.todos, new Todo({ title: this.state.newtodo, done: false })]
    })
    console.log(this.state.todos)
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
          <button type="submit">Add todo</button>
        </form>
        <ul>
          { 
            this.state.todos.map((task) => { 
              return <li key={task.title}>{task.title}</li>
            }
            )
          }
        </ul>
      </div>
    )
  }

}

export default App;
