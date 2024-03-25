import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice'
import { useNavigate } from 'react-router-dom'


function Cart() {
  
  //hooks
  const [total,setTotal] = useState(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  //function to access the cart state
  const cartArray = useSelector((state)=>state.CartReducer)
  console.log(cartArray);

  //function to find the total price of all products in cart

  const getTotal=()=>{
   if(cartArray.length>0){
    setTotal(cartArray.map((item)=>item.price).reduce((p1,p2)=>p1+p2))

   }
   else{
    setTotal(0)
   }
  }

  //to get the total price at the time of pageload and when the cartArray changes

  useEffect(()=>{
    getTotal()
  },[cartArray])

  console.log(total);

  //function to checkout
  
  const checkout =()=>{
    alert('Your Order Placed Successfully')
    dispatch(emptyCart())
    navigate('/')
  }

  return (
    <>
    <h1 className='text-center text-primary' style={{marginTop:'150px'}}>CART</h1>
     {cartArray?.length>0? 
     <div className='row mt-5'>
        <div className="col-md-8 p-5 d-flex justify-content-center align-items-center" style={{overflow:'auto'}}>
          <table className='table shadow' >
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Image</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartArray.map((product,index)=>( <tr>
                <td>{index+1}</td>
                <td>{product.title}</td>
                <td><img src={product.image} height={'100px'} width={'100px'} alt="" /></td>
                <td>₹ {product.price}</td>
                <td><button className='btn btn-danger' onClick={()=>dispatch(removeFromCart(product.id))}> <FontAwesomeIcon icon={faTrash} /></button></td>
              </tr>))
               }
            </tbody>
          </table>
        </div>
        <div className="col-md-4 p-5 ">
          <div className='shadow p-4'>
            <h3 className='text-primary mb-4'>Cart Summary</h3>
            <h5>Total Number Of Products : <span className='text-warning fs-2'>{cartArray.length}</span></h5>
            <h5 className='mt-3'>Total Price : <span className='text-warning fs-2'>₹ {total}</span></h5>
            <button onClick={checkout} className='btn btn-success mt-4 w-100'>CHECK OUT</button>
          </div>
        </div>
  
      </div>
    :
    <div className="row mt-5">
      <div className="col-md-1"></div>
      <div className="col-md-10 d-flex justify-content-center align-items-center flex-column">
        <img src="https://assets-v2.lottiefiles.com/a/447eb850-1151-11ee-962a-df534d0253f7/tnGcU7eR5U.png" alt=""  height={'300px'}/>
        <h1 className='text-primary'>Your Cart is Empty....</h1>
      </div>
      <div className="col-md-1"></div>

    </div>  
    }
    </>
  )
}

export default Cart