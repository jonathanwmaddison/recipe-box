import React from 'react'
import Form from './Form'
import Button from './Button'
import List from './List'
import AddIngredients from './AddIngredient'

function RecipeDisplay(props){
    const { recipeName, index, add, ingredients, id, remove, removeRecipe } = props;
    return (
  		<div className="panel panel-default">
    		<div className="panel-heading" role="tab" id={"heading"+id}>
      			<h4 className="panel-title">
        			<a role="button" data-toggle="collapse" data-parent="#accordion" href={"#"+id} aria-expanded="false" aria-controls={"#"+id}>
        			{recipeName} <button onClick={()=>removeRecipe(index)} className="pull-right">remove</button>
					</a>
      			</h4>
    		</div>
    		<div id={id} className="panel-collapse collapse" role="tabpanel" aria-labelledby={"heading"+id}>
      			<div className="panel-body">
      				<List listItems={ingredients} recipeIndex= {index} remove={ remove }  />
                    <AddIngredients addType="Ingredients" handleData={add} index={index} />
				</div>
    		</div>
  		</div>
    )
}

export default RecipeDisplay
