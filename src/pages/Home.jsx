import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import useFetch from '../hooks/useFetch'
import { useDispatch } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'


function Home() {

  const dispatch = useDispatch()


  const data = useFetch('https://fakestoreapi.com/products')
  console.log(data);

  return (
    <Row className=' p-5' style={{marginTop:'150px'}}>
      {data?.length > 0 ?
        data.map(product => (
          <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
            <Card style={{ width: '100%',height:'100%', border: 'rounded' }} className='rounded shadow'>
              <Card.Img variant="top" src={product.image}  height={'200px'}/>
              <Card.Body>
                <Card.Title className='text-primary'><b>{product.title.slice(0,20)}... </b></Card.Title>
                <Card.Text>
                  {product.description.slice(0,60)}...
                  <p className='fs-5 mt-3'><b>Price: ₹ {product.price}</b></p>
                </Card.Text>
                <div className='d-flex justify-content-between'>
                  <Button variant="outline-danger" className='rounded' onClick={()=>dispatch(addToWishlist(product))}><FontAwesomeIcon icon={faHeart} /> </Button>
                  <Button variant="outline-success" className='rounded' onClick={()=>dispatch(addToCart(product))}><FontAwesomeIcon icon={faCartShopping} /></Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))

        : <p className='mt-5 text-info fs-3'>Loading......</p>}
    </Row>


  )
}

export default Home