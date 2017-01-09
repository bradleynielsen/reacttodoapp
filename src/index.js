import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './components/TodoItem';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: ["Wash my car", "Wash my dog", "Wash my washer"],
      todo: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this)
  }

  handleChange(event) {
  	console.log(event.target.value);
  	this.setState({
  		todo: event.target.value
  	})
  }

  handleAddTodo(){
 	this.setState({
 		todos: this.state.todos.concat(this.state.todo),
 		todo: ""
 	})
  }



  render() {
    return (
      <div>
        <h1>Thigs to do</h1>
        <ol>
         {this.state.todos.map((todo) => <TodoItem key={todo} todo={todo} />)}
        </ol>
        <input value={this.state.todo} onChange={this.handleChange} type="text" />
        <button onClick={this.handleAddTodo}>Add Todo</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));



ReactDOM.render(<App />, document.getElementById('app'));



