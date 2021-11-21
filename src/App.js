//import './App.css';
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
      newTodo: e.target.value
    })
  }

  formSubmitted(event) {
    event.preventDefault();
    console.log(`Form submitted! ${this.state.newTodo}`);
    // this.state.todos.push(new Todo({ title: this.state.newTodo, done: false }))
    // this.setState({
    //   newTodo: '',
    //   todos: this.state.todos 
    // })
    this.setState({
      newTodo: '',
      todos: [ ...this.state.todos, new Todo({ title: this.state.newTodo, done: false })]
    })
    console.log(this.state.todos)
  }

  toggleDone(e, i) {
    console.log(e.target.checked);
    console.log(this.state.todos[i])
    let td = [ ...this.state.todos ];
    td[i].done = e.target.checked;
    this.setState({ todos: td })
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
          <input onChange={e => this.newTodoOnChange(e)} id="newTodo" name="newTodo" value={ this.state.newTodo }/>
          <button type="submit">Add todo</button>
        </form>
        <ul>
          { 
            this.state.todos.map((task, index) => { 
              return <li key={task.title}>
                <input onChange={e => this.toggleDone(e, index)} name="{task.title}" type="checkbox" />
                <label htmlFor="{task.title}" className={ task.done? 'done' : ''} >
                  {task.title}
                </label>

              </li>
            }
            )
          }
        </ul>
      </div>
    )
  }

}

export default App;
