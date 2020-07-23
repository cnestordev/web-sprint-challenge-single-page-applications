import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = styled.nav`
    background: ghostwhite;
    text-align: right;
`

const NavItems = styled.ul`
    display: flex;
    justify-content: flex-end;
    padding: 2% 0;
`

const Item = styled.li`
    link-style: none;
`

export default function Navbar(props) {
    return (
        <>
            <header>
                <Nav>
                    <NavItems>
                        <Item><Link to="/">Home</Link></Item>
                        <Item><Link to="/pizza">Pizza</Link></Item>
                    </NavItems>
                </Nav>
            </header>
        </>
    )
}