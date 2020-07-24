import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const Container = styled.div`
    background: blue;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 30vh;
    background-image: url('https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
    background-size: cover;
    background-position: center;
`

const Header = styled.h1`
    color: #fff;
    font-family: sans-serif;
`

const Button = styled.button`
    border: 1px solid #e65858;
    box-shadow: 0 0 10px 2px #000000;
    font-size: 0.8rem;
    border-radius: 45px;
    background: #ff4343;
    padding: 1.5% 4%;
`

export default function Banner(props) {
    return (
        <Container>
            <Header>It's Dinner Time</Header>
            <Button><Link to="/pizza">Pizza?</Link></Button>
        </Container>
    )
}