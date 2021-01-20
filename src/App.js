import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
//import { v4 as uuid } from 'uuid';

import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount(){
    const apiurl = "https://jsonplaceholder.typicode.com/todos?_limit=10";
    axios.get(apiurl)
    //.then(res => console.log(res.data))
    .then(res => this.setState({ todos: res.data }))
    .catch((err) => {
      console.log(err);
    })
  }

  markComplete = (id) => {
    //console.log(id);
    //loop through todos
    this.setState({ todos: this.state.todos.map(todo => {
      //if id matches with the clicked todo
      if(todo.id === id){
        //toggle true/false on the todo completed
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  delTodo = (id) => {
    //console.log(id);

    const apiurl = `https://jsonplaceholder.typicode.com/todos/${id}`;
    axios.delete(apiurl)
    //loop through todos and filter away the one which id is not equal to the id passe
    .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }))
    .catch((err) => {
      console.log(err);
    })
  }

  addTodo= (title) => {
    //console.log(title);
    /*
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false
    }
    */
    const apiurl = "https://jsonplaceholder.typicode.com/todos";
    axios.post(apiurl, {
      title: title,
      completed: false
    })
    .then(res => this.setState({ todos: [...this.state.todos, res.data ]}))
    
    .catch((err) => {
      console.log(err);
    })
  }

  render(){
    //console.log(this.state.todos);
    return (
      <Router basename="/folders/react/todo-app/">
      <div className="App">
        <div className="container">
        <Header></Header>
        <Route exact path="/" render={props => (
          <React.Fragment>
            <AddTodo addTodo={this.addTodo}></AddTodo>
            {
            /* show todos component 
            creating the method for the props in todos.js and todoitem.js
            */}
            <Todos todosProp={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}></Todos>
              </React.Fragment>
            )}>
        </Route>
        <Route path="/about" component={About}>

        </Route>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
