import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import logo from '../../../public/logo.png'

const Header = () => {
    return (
        <div className='sticy'>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink to="/"> <img src={logo} alt="" /></NavLink>
                    <Nav className="ms-auto">
                        <NavLink className='nav-link' to="/">Home</NavLink>
                        <NavLink className='nav-link' to="/meals">Meals</NavLink>
                        <NavLink className='nav-link' to="/about">About</NavLink>
                        <NavLink className='nav-link' to="/contact">Contact</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;