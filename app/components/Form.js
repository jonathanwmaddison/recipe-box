import React, { Component } from 'react'
import Button from './Button'

class Form extends Component {
    handleSubmit (e) {
        console.log("test")
        e.preventDefault(); //prevent page refresh.
        let newRecipe = this.refs.newRecipe.value
        this.props.handleData(newRecipe)
    }
    render() {
        let newRecipe;
        return (
        <div>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" ref="newRecipe" placeholder={"Add " + this.props.addType } />
              <button>Add {this.props.addType} </button>
            </form>
        </div>
        )
    }
}

export default Form
