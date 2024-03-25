import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';




function Footer() {
  return (
    <div className='bg-primary px-4 py-4 text-light w-100 justify-content-center mt-5 align-items-center d-flex flex-column'>
        <div className='w-100 row p-3  '>
          <div className="col-md-4 pe-5" >
            <div className='website ' style={{ width: '400px',paddingRight:'100px' }}>
            <FontAwesomeIcon icon={faCartShopping} beat style={{fontSize:'30px',paddingRight:'10px'}} />
              <span style={{  fontSize: '30px' }}>E-CART</span>
              <p style={{  fontSize: '16px', textAlign: 'justify', paddingTop: '10px' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit veritatis quisquam illo, sed, ea officia perspiciatis, provident excepturi id error quibusdam tempora! </p>
            </div>
          </div>
          <div className="col-md-2 ">
            <div className='links text-light justify-content-center align-items-center'>
              <h4>Links</h4>
              <p className='mt-3'><Link to={'/'} className='text-light'>Home</Link></p>
              <p><Link to={'/wishlist'} className='text-light'>Wishlist</Link></p>
              <p><Link to={'/cart'} className='text-light'>Cart</Link></p>
            </div>
          </div>
          <div className="col-md-3">
            <div className='guides'>
              <h4>Guides</h4>
              <p className='mt-3'>React</p>
              <p>React-Bootstrap</p>
              <p>Bootswatch</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className='contact '>
              <h4>Contact Us</h4>
              <input style={{ borderRadius: '5px', padding: '7px' }} type="text" placeholder='Enter your Email ID' />
              <button style={{ borderRadius: '5px', height: '40px', width: '70px', marginLeft: '8px', backgroundColor: 'orange', color: 'white' }}>Subscribe</button>
              <div className='d-flex justify-content-around mt-3 pt-2 me-5'>
                   <FontAwesomeIcon icon={faInstagram} size='2xl' />
                    <FontAwesomeIcon icon={faFacebook} size='2xl' />
                    <FontAwesomeIcon icon={faTwitter} size='2xl' />
                    <FontAwesomeIcon icon={faLinkedin} size='2xl' /> 

              </div>

            </div>
          </div>
        </div>
        <p style={{ paddingTop: '50px' }}>Copyright © 2023 Media Player. Built with React.</p>
    </div>

   
  )
}

export default Footer