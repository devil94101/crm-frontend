import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import Logo from '../../assets/logo.png'
import { LinkContainer } from 'react-router-bootstrap'
const Header = () => {
    return (
        <Navbar
            collapseOnSelect
            variant='dark'
            bg='info'
            expand="md"
        >
            <Navbar.Brand>
                <img src={Logo} width="50px"></img>
            </Navbar.Brand>
            <Navbar.Toggle
                aria-controls='basic-navbar-nav'
            />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ml-auto'>
                    <LinkContainer to='/dashboard'>
                        <Nav.Link >
                            Dashboard
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/tickets'>
                        <Nav.Link >
                            Tickets
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/'>
                        <Nav.Link >
                            Logout
                        </Nav.Link>
                    </LinkContainer>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header