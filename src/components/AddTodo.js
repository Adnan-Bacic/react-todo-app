import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {

    state = {
        title: ""
    }

    inputOnChange = (e) => this.setState({ [e.target.name]: e.target.value });

    formOnSubmit = (e) => {
        e.preventDefault();

        this.props.addTodo(this.state.title);
        this.setState({ title: "" });
    }

    render() {
        return (
            <form onSubmit={this.formOnSubmit} style={{ display: "flex" }}>
                <input type="text" name="title" value={this.state.title} onChange={this.inputOnChange} placeholder="Add todo" style={{ flex: "10", padding: "5px" }}></input>
                <input type="submit" value="Submit" className="btn" style={{ flex: "1" }}></input>
            </form>
        )
    }
}

//define proptypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
}

export default AddTodo
