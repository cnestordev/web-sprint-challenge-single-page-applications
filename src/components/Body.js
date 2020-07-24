import React from 'react'
import Thumbnail from './Thumbnail'

import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    background: pink;
    justify-content: space-around;
`

export default function Body(props) {
    return (
        <Container>
            <Thumbnail />
            <Thumbnail />
            <Thumbnail />
            <Thumbnail />
            <Thumbnail />
            <Thumbnail />
        </Container>
    )
}