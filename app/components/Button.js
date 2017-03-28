import React from 'react'

function Button (props) {
    const { message, action } = props;
    return (
        <span className="glyphicon glyphicon-minus pull-right" aria-hidden="true"></span>
    )
}

export default Button
