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
`

export default function Banner(props) {
    return (
        <Container>
            <h1>Banner</h1>
            <button><Link to="/pizza">Pizza?</Link></button>
        </Container>
    )
}