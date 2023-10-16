import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Banner from './Banner';
function Header() {
    return (
        <>
            <Banner />
            <header className='bg-gray-100 wrap'>
                <Navbar expand="lg">
                    <Link to='/' className='text-3xl'>
                        <span className='text-5xl text-red-500'>𝓡</span>𝓸𝓴𝓽𝓸𝓓𝓲𝓫𝓸
                    </Link>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            navbarScroll
                        >
                            <Link to='/' className='item'>Home</Link>
                            <Link to='/about' className='item'>About</Link>
                            <Link to='/blogs' className='item'>Blogs</Link>
                            <Link to='/login' className='item'>login</Link>
                        </Nav>
                        <Form className="d-none">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>

            </header>


        </>
    );
}

export default Header;