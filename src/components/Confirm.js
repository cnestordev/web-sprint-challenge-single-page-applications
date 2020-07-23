import React from 'react'

export default function Confirm({ content }) {
    return (
        <div>
            <h2>Your order has been placed</h2>
            <div>
                <h4>Name: {content.name}</h4>
                <p>Size: {content.size}</p>
                <p>Sauce: {content.sauce}</p>
                <p>Toppings: {content.sauce}</p>
                {content.glutenfree && <p>Gluten Free</p>}
                <p>Special Instruction: {content.special}</p>
                <p>Quantity: {content.quantity}</p>
            </div>
        </div>
    )
}