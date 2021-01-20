import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

  render(){
    //console.log(this.props.todosProp)
    return this.props.todosProp.map((todo) => (
        //for every todo, show a todoitem component
        //set a key so every todo has a unique identifier
        //get the prop from app.js for markcomplete
        //get deltodo
        <TodoItem todo={todo} key={todo.id} markComplete={this.props.markComplete} delTodo={this.props.delTodo}></TodoItem>
    ));
  }
}

//define proptypes
Todos.propTypes = {
    todosProp: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

export default Todos;
