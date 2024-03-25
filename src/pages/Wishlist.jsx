import React from 'react'
import { faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

function Wishlist() {

  const dispatch = useDispatch()
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  console.log(wishlistArray);

  const handleCart = (item)=>{
    dispatch(removeFromWishlist(item.id))
    dispatch(addToCart(item))
  }
  
  
  return (
   <>
   <h1 className='text-center text-primary' style={{marginTop:'150px'}}>WISH LIST</h1>
     { wishlistArray?.length>0?
     <Row className='mt-5 p-5'>
         {wishlistArray.map((product)=>(
          <Col sm={12} md={6} lg={4} xl={3}>
          <Card style={{ width: '100%',border:'rounded' }}>
            <Card.Img variant="top" src={product.image}  height={'200px'} />
            <Card.Body>
              <Card.Title className='text-primary'><b>{product.title.slice(0,20)}... </b></Card.Title>
              <Card.Text>
              {product.description.slice(0,60)}...
                <p className='fs-5 mt-3'><b>Price: ₹  {product.price}</b></p>
              </Card.Text>
              <div className='d-flex justify-content-between'>
                <Button variant="outline-danger" className='rounded' onClick={()=>dispatch(removeFromWishlist(product.id))}><FontAwesomeIcon icon={faTrash} /> </Button>
                <Button variant="outline-success" className='rounded' onClick={()=>handleCart(product)} ><FontAwesomeIcon icon={faCartShopping} /></Button>
                </div>
            </Card.Body>
          </Card>
        </Col>
         )) 
         }
        </Row>
      :
      <div className='d-flex justify-content-center align-items-center flex-column'>
        <img src="https://www.our-eshop.com/frontend/assets/images/no-wish-list.png" alt=""  />
        <button className='btn btn-success mb-5'>BACK TO HOME</button>
      </div>}
   </>
  )
}

export default Wishlist