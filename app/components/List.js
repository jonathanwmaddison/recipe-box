import React from 'react'
import Button from './Button'
import Form from './Form'
import uuid from 'uuid'

function List (props) {
    const { listItems, recipeIndex, remove, listName, listType } = props;
    return (
        <div>
            {listItems.map((item, index) => <p id={item+index} key={item+index}> {item} <button className="btn btn-danger pull-right" onClick={()=>remove(index, recipeIndex)} /></p>)}
        </div>
    )
}

export default List
