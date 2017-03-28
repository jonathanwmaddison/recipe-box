import React, { Component } from 'react'
import RecipeDisplay from './RecipeDisplay'
import Form from './Form'
import List from './List'
import AddIngredient from './AddIngredient'
import uuid from 'uuid'

//uuid is used to generate a random id for each item

class RecipeIndex extends Component {
    constructor(props) {
        super(props)
		if(localStorage.recipes) {
			console.log(JSON.parse(localStorage.recipes))
			this.state = {
				recipes: JSON.parse(localStorage.recipes)
			}
		} else {
        	this.state = {
            	recipes: [
                	{id: uuid(), name: "lasagna", ingredients: ["cheese", "pasta", "sauce"]},
                	{id: uuid(), name: "pie", ingredients: ["crust", "filling", "love"]}
            	]    
        	}
			localStorage.setItem("recipes", JSON.stringify(this.state.recipes))
		}
    }
	updateLocalStorage() {
		localStorage.setItem("recipes", JSON.stringify(this.state.recipes))
	}
	addRecipe(newRecipe) {
		console.log(newRecipe)
		this.setState({
			recipes: [
			...this.state.recipes,
			{id: uuid(), name: newRecipe, ingredients: []}
		]
		})
	}
	removeRecipe(index) {
		this.state.recipes.splice(index, 1)
		this.setState({
			recipes: [
				...this.state.recipes
			]
		})
	}
	addIngredient(index, newIngredient) {
		let currentRecipe = this.state.recipes[index].ingredients.push(newIngredient)
		this.setState({
			recipes: [
			...this.state.recipes
		]
		})
	}
	removeIngredient(index, recipeIndex) {
		let currentRecipe = this.state.recipes[recipeIndex].ingredients.splice(index, 1)
		this.setState({
			recipes: [
			...this.state.recipes
		]
		})
	}
	componentDidUpdate() {
		this.updateLocalStorage()
	}
    render() {
        return (
  		<div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                {this.state.recipes.map((recipe,index)=> (
						<RecipeDisplay key ={recipe.id} recipeName={recipe.name} id={recipe.id} ingredients={recipe.ingredients} index={index} add={this.addIngredient.bind(this)} remove={this.removeIngredient.bind(this)} removeRecipe={this.removeRecipe.bind(this)}/>
				 )   
            )}          
       		<Form handleData={this.addRecipe.bind(this)} addType="Recipe" />
		</div>
        )
    }
}
export default RecipeIndex;
