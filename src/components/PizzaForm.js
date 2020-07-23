import React from 'react'
import Total from './Total'
import styled from 'styled-components'

const Container = styled.div`
    background: ghostwhite;
    text-align: center;
    font-size: sans-serif;
    width: 80%;
    margin: auto;
`

const Header = styled.h2`
    background: #ff3e3e;
    margin: 0 auto;
    padding: 2% 0;
    color: #fff;
    width: 41%;
`

const Option = styled.div`
    background: #b3b3b3;
    margin: 1% auto;
    width: 50%;
`

const SubHeader = styled.h3`
    background: #292929;
    color: #fff;
    width: 65%;
    margin: 0 auto;
`

export default function PizzaForm(props) {
    const { handler, toppings, gluten, values, submit, disabled, errors } = props

    return (
        <Container>
            <div>
                <Header>Build your Own Pizza</Header>
                <img class="form-image" src="https://images.unsplash.com/photo-1581873372796-635b67ca2008?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            </div>
            <div>
                <SubHeader>Customize your pizza</SubHeader>
            </div>
            <form onSubmit={submit}>
                <div className="option-container">
                    <Option>Choice of Size</Option>
                    <select name="size" onChange={handler} value={values.size}>
                        <option name="size" value="small">Small</option>
                        <option name="size" value="medium">Medium</option>
                        <option name="size" value="large">Large</option>
                    </select>
                </div>
                <div className="option-container">
                    <Option>Choice of Sauce</Option>
                    <input onChange={handler} type="radio" name="sauce" id="original" value="original" />
                    <label htmlFor="original">Original Red</label>

                    <input onChange={handler} type="radio" name="sauce" id="garlic" value="garlic" />
                    <label htmlFor="garlic">Garlic Ranch</label>

                    <input onChange={handler} type="radio" name="sauce" id="bbq" value="bbq" />
                    <label htmlFor="bbq">BBQ Sauce</label>

                    <input onChange={handler} type="radio" name="sauce" id="spinach" value="spinach" />
                    <label htmlFor="spinach">Spinach Alfredo</label>
                </div>
                <div className="option-container">
                    <Option>Add Toppings</Option>
                    <input onChange={toppings} type="checkbox" name="topping" id="pepperoni" value="pepperoni" checked={values.toppings.pepperoni} />
                    <label htmlFor="pepperoni">Pepperoni</label>

                    <input onChange={toppings} type="checkbox" name="topping" id="sausage" value="sausage" checked={values.toppings.sausage} />
                    <label htmlFor="sausage">Sausage</label>

                    <input onChange={toppings} type="checkbox" name="topping" id="chicken" value="chicken" checked={values.toppings.chicken} />
                    <label htmlFor="chicken">Chicken</label>

                    <input onChange={toppings} type="checkbox" name="topping" id="onions" value="onions" checked={values.toppings.onions} />
                    <label htmlFor="onions">Onions</label>

                    <input onChange={toppings} type="checkbox" name="topping" id="mushrooms" value="mushrooms" checked={values.toppings.mushrooms} />
                    <label htmlFor="mushrooms">Mushrooms</label>

                    <input onChange={toppings} type="checkbox" name="topping" id="pineapple" value="pineapple" checked={values.toppings.pineapple} />
                    <label htmlFor="pineapple">Pineapple</label>

                    <input onChange={toppings} type="checkbox" name="topping" id="peppers" value="peppers" checked={values.toppings.peppers} />
                    <label htmlFor="peppers">Peppers</label>

                    <input onChange={toppings} type="checkbox" name="topping" id="bacon" value="bacon" checked={values.toppings.bacon} />
                    <label htmlFor="bacon">Bacon</label>
                </div>
                <div className="option-container">
                    <Option>Choice of Substitute</Option>
                    <label htmlFor="glutenfree">Gluten Free</label>
                    <input onChange={gluten} type="checkbox" name="glutenfree" id="glutenfree" checked={values.glutenfree} />
                </div>
                <div className="option-container">
                    <Option>Special Instructions</Option>
                    <textarea onChange={handler} name="special" id="special" value={values.special} />
                </div>
                <div className="option-container">
                    <Option>Customer Name</Option>
                    <label htmlFor="name">Full Name</label>
                    <br />
                    <input type="text" onChange={handler} name="name" id="name" value={values.name} />
                </div>
                <Total disabled={disabled} value={values.quantity} handler={handler} />
            </form>
            <div>
                {errors.name.length > 0 && <p>{errors.name}</p>}
                {errors.sauce.length > 0 && <p>{errors.sauce}</p>}
                {errors.quantity.length > 0 && <p>{errors.quantity}</p>}
            </div>
        </Container>
    )
}