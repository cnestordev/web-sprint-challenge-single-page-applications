import React from 'react'
import Total from './Total'

export default function PizzaForm(props) {
    const { handler, toppings, gluten, values, submit, disabled, errors } = props

    return (
        <div>
            <div>
                <h2>Build your Own Pizza</h2>
                <img src="#" />
            </div>
            <div>
                <h2>Customize your pizza</h2>
            </div>
            <form onSubmit={submit}>
                <div class="option-container">
                    <h3>Choice of Size</h3>
                    <select name="size" onChange={handler} value={values.size}>
                        <option name="size" value="small">Small</option>
                        <option name="size" value="medium">Medium</option>
                        <option name="size" value="large">Large</option>
                    </select>
                </div>
                <div class="option-container">
                    <h3>Choice of Sauce</h3>
                    <label htmlFor="original">Original Red</label>
                    <input onChange={handler} type="radio" name="sauce" id="original" value="original" />

                    <label htmlFor="garlic">Garlic Ranch</label>
                    <input onChange={handler} type="radio" name="sauce" id="garlic" value="garlic" />

                    <label htmlFor="bbq">BBQ Sauce</label>
                    <input onChange={handler} type="radio" name="sauce" id="bbq" value="bbq" />

                    <label htmlFor="spinach">Spinach Alfredo</label>
                    <input onChange={handler} type="radio" name="sauce" id="spinach" value="spinach" />
                </div>
                <div class="option-container">
                    <h3>Add Toppings</h3>
                    <label htmlFor="pepperoni">Pepperoni</label>
                    <input onChange={toppings} type="checkbox" name="topping" id="pepperoni" value="pepperoni" checked={values.toppings.pepperoni} />

                    <label htmlFor="sausage">Sausage</label>
                    <input onChange={toppings} type="checkbox" name="topping" id="sausage" value="sausage" checked={values.toppings.sausage} />

                    <label htmlFor="chicken">Chicken</label>
                    <input onChange={toppings} type="checkbox" name="topping" id="chicken" value="chicken" checked={values.toppings.chicken} />

                    <label htmlFor="onions">Onions</label>
                    <input onChange={toppings} type="checkbox" name="topping" id="onions" value="onions" checked={values.toppings.onions} />

                    <label htmlFor="mushrooms">Mushrooms</label>
                    <input onChange={toppings} type="checkbox" name="topping" id="mushrooms" value="mushrooms" checked={values.toppings.mushrooms} />

                    <label htmlFor="pineapple">Pineapple</label>
                    <input onChange={toppings} type="checkbox" name="topping" id="pineapple" value="pineapple" checked={values.toppings.pineapple} />

                    <label htmlFor="peppers">Peppers</label>
                    <input onChange={toppings} type="checkbox" name="topping" id="peppers" value="peppers" checked={values.toppings.peppers} />

                    <label htmlFor="bacon">Bacon</label>
                    <input onChange={toppings} type="checkbox" name="topping" id="bacon" value="bacon" checked={values.toppings.bacon} />
                </div>
                <div class="option-container">
                    <h3>Choice of Substitute</h3>
                    <label htmlFor="glutenfree">Gluten Free</label>
                    <input onChange={gluten} type="checkbox" name="glutenfree" id="glutenfree" checked={values.glutenfree} />
                </div>
                <div class="option-container">
                    <h3>Special Instructions</h3>
                    <textarea onChange={handler} name="special" id="special" value={values.special} />
                </div>
                <div class="option-container">
                    <h3>Customer Name</h3>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" onChange={handler} name="name" id="name" value={values.name} />
                </div>
                <Total disabled={disabled} value={values.quantity} handler={handler} />
            </form>
            <div>
                {errors.name.length > 0 && <p>{errors.name}</p>}
                {errors.sauce.length > 0 && <p>{errors.sauce}</p>}
                {errors.quantity.length > 0 && <p>{errors.quantity}</p>}
            </div>
        </div>
    )
}