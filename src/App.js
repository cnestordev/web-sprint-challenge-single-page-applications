import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom'
import formSchema from './formSchema'
import * as yup from 'yup'
import axios from 'axios'

import Nav from './components/Navbar'
import Banner from './components/Banner'
import Body from './components/Body'
import PizzaForm from './components/PizzaForm'
import Confirm from './components/Confirm'

const App = () => {

  const initialState = {
    size: 'small',
    sauce: '',
    toppings: {
      pepperoni: false,
      sausage: false,
      chicken: false,
      onions: false,
      mushrooms: false,
      pineapple: false,
      peppers: false,
      bacon: false
    },
    glutenfree: false,
    special: '',
    quantity: 1,
    name: ''
  }

  const errorMessages = {
    size: '',
    sauce: '',
    toppings: '',
    glutenfree: '',
    special: '',
    quantity: '',
    name: ''
  }

  const [pizza, setPizza] = useState(initialState)
  const [errors, setErrors] = useState(errorMessages)
  const [disabled, setDisabled] = useState(true)
  const [content, setContent] = useState([])

  useEffect(() => {
    formSchema.isValid(pizza).then(valid => {
      setDisabled(!valid)
    })
  }, [pizza])

  const updatePizza = e => {
    const { name, value } = e.target

    yup
      .reach(formSchema, name)

      .validate(value)

      .then(valid => {
        setErrors({
          ...errors,
          [name]: "",
        })
      })

      .catch(err => {
        setErrors({
          ...errors,
          [name]: err.errors[0],
        })
      })

    setPizza({
      ...pizza,
      [name]: value
    })
  }

  const updateToppings = e => {
    console.log(e.target.value)
    console.log(e.target.checked)
    setPizza({
      ...pizza,
      toppings: {
        ...pizza.toppings,
        [e.target.value]: e.target.checked
      }
    })
  }

  const updateGluten = e => {
    setPizza({
      ...pizza,
      glutenfree: e.target.checked
    })
  }

  const submitForm = e => {
    e.preventDefault()
    axios.post('https://reqres.in/api/users', pizza)
      .then(res => {
        setContent([res.data])
      })
  }

  if (content.length > 0) {
    return <Confirm content={content[0]} />
  }


  return (
    <>
      <Nav />
      <Switch>

        <Route exact path="/">
          <Banner />
          <Body />
        </Route>

        <Route exact path="/pizza">
          <PizzaForm
            submit={submitForm}
            values={pizza} gluten={updateGluten}
            toppings={updateToppings}
            handler={updatePizza}
            disabled={disabled}
            errors={errors
            }
          />
        </Route>

      </Switch>
    </>
  )



  // return (
  //   <div>
  //     <Nav />
  //     <Banner />
  //     <Body />
  //   </div>
  // );
};
export default App;
