import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyles = () => {
        /*
        if(this.props.todo.completed){
            return{
                textDecoration: "line-through"
            }
        } else {
            return{
                textDecoration: "none"
            }
        }
        */
       return{
           textDecoration: this.props.todo.completed ? "line-through" : "none",
           background: "#f4f4f4",
           padding: "10px",
           borderBottom: "1px #ccc dotted"
       }
    }

    markComplete = (e) => {
        console.log(this.props)
    }

    render() {
        //destructure
        const { id, title } = this.props.todo;
        return (
            <div style={ this.getStyles() }>
                <p>
                    {/* get prop from todos.js */}
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}></input>
                    { title }
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

//define proptypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

const btnStyle = {
    background: "#ff0000",
    color: "white",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
}

export default TodoItem
