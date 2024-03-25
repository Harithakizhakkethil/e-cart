import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Badge, Button, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';




function Header() {

    const wishlistArray = useSelector((state)=>state.wishlistReducer)
    console.log(wishlistArray);

    const cartArray = useSelector((state)=>state.CartReducer)
    console.log(cartArray);

    return (
        <div>
            <Navbar expand="lg" className="bg-primary px-5 py-4 position-fixed w-100 top-0" style={{zIndex:'1'}}>
                <Container fluid>
                    <Link to={'/'} style={{textDecoration:'none'}}><Navbar.Brand href="#" className='text-light'><FontAwesomeIcon icon={faCartShopping} bounce className='me-2'/> E-CART</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                      <Nav className='ms-auto me-5 mb-5 '>
                        <Link to={'/wishlist'}><Button className='btn btn-outline-light rounded'><FontAwesomeIcon icon={faHeart} className='me-2 text-danger'  /> Wishlist <Badge bg="secondary" className='ms-2 rounded'>{wishlistArray.length}</Badge></Button></Link>
                        <Link to={'/cart'}><Button className='btn btn-outline-light rounded ms-5 me-5 ' ><FontAwesomeIcon icon={faCartShopping} className='me-2' style={{color:'yellow'}} /> Cart <Badge bg="secondary" className='ms-2 rounded' >{cartArray?.length}</Badge></Button></Link>
                      </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default Header