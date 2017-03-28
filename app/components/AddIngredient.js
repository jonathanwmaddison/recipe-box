import React, { Component } from 'react'
import Button from './Button'

class AddIngredient extends Component {
    handleSubmit (e) {
        console.log("test")
        e.preventDefault(); //prevent page refresh.
        let newIngredient = this.refs.newRecipe.value
        this.props.handleData(this.props.index, newIngredient)
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

export default AddIngredient
