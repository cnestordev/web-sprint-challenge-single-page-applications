import React from 'react'

export default function Total({ handler, value, disabled }) {
    return (
        <div>
            <label for="quantity">Quantity:</label>
            <br />
            <input value={value} id="quantity" name="quantity" onChange={handler} type="number" />
            <br />
            <button disabled={disabled}>Add to order</button>
        </div>
    )
}