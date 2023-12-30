import React, { useContext, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import demoImg from '../../images/demo.jpg'
import { useState } from 'react';
import { GlobalState } from '../../State/State';


function Header() {
    const { token } = useContext(GlobalState)
    const [photoRole, setPhotoRole] = useState({});
    useEffect(() => {
        const isPhoto_role = localStorage.getItem("photo_role");
        if (isPhoto_role) {
            const photoRole = JSON.parse(isPhoto_role)

            setPhotoRole({ ...photoRole, profilePic: photoRole.profilePic, role: photoRole.role })
        }

    }, [setPhotoRole]);

 
    return (
        <header className='px-4 md:px-0 bg-gray-100'>
            {['md'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-gray-100">
                    <Container fluid>
                        <Navbar.Brand as={Link} to='/'>ROKTOJODDHA</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    ROKTOJODDHA
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link as={Link} to='/home'>হোম</Nav.Link>
                                    <NavDropdown
                                        title="তালিকা"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >

                                        <NavDropdown.Item as={Link} to='/donars'>
                                            দাতা
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item as={Link} to='/users'>
                                            গ্রহীতা
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link as={Link} to='/about'>আমাদের সম্পর্কে </Nav.Link>
                                    <Nav.Link as={Link} to='/blogs'>ব্লগ</Nav.Link>


                                    {
                                        token && photoRole
                                            ? <Link to={`/${photoRole.role}-profile`}>
                                                <img className='w-10 h-10 rounded-full ml-3 cursor-pointer' src={ photoRole.profilePic ? photoRole.profilePic : demoImg} alt="" />
                                            </Link>
                                            : <NavDropdown
                                                title="লগইন "
                                                id={`offcanvasNavbarDropdown-expand-${expand}`}
                                            >

                                                <NavDropdown.Item as={Link} to='/donar-auth'>
                                                    দাতা
                                                </NavDropdown.Item>
                                                <NavDropdown.Divider />
                                                <NavDropdown.Item as={Link} to='/user-auth'>
                                                    গ্রহীতা
                                                </NavDropdown.Item>
                                            </NavDropdown>


                                    }


                                </Nav>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </header>
    );
}

export default Header;