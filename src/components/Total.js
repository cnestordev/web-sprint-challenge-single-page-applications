import React from 'react'

export default function Total({ handler, value, disabled }) {
    return (
        <div>
            <input value={value} name="quantity" onChange={handler} type="number" />
            <button disabled={disabled}>Add to order -total price here- </button>
        </div>
    )
}