import React from 'react'

export default function Confirm({ content }) {
    const tops = Object.keys(content.toppings).filter(item => content.toppings[item])

    const allToppings = tops.map(item => <span key={item}>{item} </span>)

    return (
        <div>
            <h2>Your order has been placed</h2>
            <div>
                <h4>Name: {content.name}</h4>
                <p>Size: {content.size}</p>
                <p>Sauce: {content.sauce}</p>
                <p>Toppings: {allToppings}</p>
                {content.glutenfree && <p>Gluten Free</p>}
                <p>Special Instruction: {content.special || "None"}</p>
                <p>Quantity: {content.quantity}</p>
            </div>
        </div>
    )
}