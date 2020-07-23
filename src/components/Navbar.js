import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
    background: red;
`

export default function Navbar(props) {
    return (
        <>
            <header>
                <Nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Help</a></li>
                    </ul>
                </Nav>
            </header>
        </>
    )
}