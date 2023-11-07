import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
function Header() {

    return (
        <Navbar expand="lg" className="bg-body-tertiary wrap">
            <Navbar.Brand href="#home">
                <span className='text-5xl text-red-500'>𝓡</span>𝓸𝓴𝓽𝓸𝓓𝓲𝓫𝓸
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto flex items-center justify-end">
                    <Link to='/' className='item'>home</Link>
                    <Link to='/donars' className='item'>donar list</Link>
                    <Link to='/about' className='item'>about</Link>
                    <Link to='/blogs' className='item'>blogs</Link>
                    <div className='md:ml-3'>
                    <Dropdown>
                        <Dropdown.Toggle variant='danger' className='button' id="dropdown-basic">
                            <span className='item ml-0'>Login</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                                 <Link>User Login</Link>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                                 <Link>User Login</Link>
                            </Dropdown.Item> 
                        </Dropdown.Menu>
                    </Dropdown>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;