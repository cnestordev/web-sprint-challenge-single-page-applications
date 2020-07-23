import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    flex-basis: 30%;
    align-items: center;
    margin: 1% auto;
`

export default function Thumbnail(props) {
    return (
        <Container>
            <img src="#" />
            <h4>Restaurant Name</h4>
            <p>Restaurant Descriptions</p>
            <p>Time for Delivery</p>
        </Container>
    )
}