import React, { useEffect, useRef, useState } from 'react';
import api from '../../utils/apiHandler'; // Import the Axios instance
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cart.css';
import MainBg from '../Background/MainBg';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([])
  const [cartTotal, setCartTotal] = useState(0)
  const cartRef = useRef(null)

  const fetchCartItems = async () => {
    try {
      const response = await api.get('/cart/list', {
        headers: {
          'Content-Type': 'application/json',
          // Authorization: `Bearer ${'122|GYCyJVzwQYiSKrDhUcLL9vtPTKaxM39sbDJ7Lxll'}`,
        },
        withCredentials: true,
      })
      setCartItems(response.data.cartItems)
      calculateCartTotal(response.data.cartItems)
    } catch (error) {
      console.error('Error fetching cart items:', error)
    }
  }

  const calculateCartTotal = (items) => {
    const total = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    )
    setCartTotal(total)
  }

  const handleRemoveItem = async (itemId) => {
    try {
      await api.delete(`/cart/remove/${itemId}`, {
        headers: {
          'Content-Type': 'application/json',
          // Authorization: `Bearer ${'121|EhV0mSawWsaTTkmtsKIegUFlhWdpGLBpyMNLj3LM'}`,
        },
        withCredentials: true,
      })
      fetchCartItems() // Refresh cart items after removal
    } catch (error) {
      console.error('Error removing item:', error)
    }
  }

  const handleClearCart = async () => {
    try {
      await api.patch(
        '/cart/clear',
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            // Authorization: `Bearer ${'121|EhV0mSawWsaTTkmtsKIegUFlhWdpGLBpyMNLj3LM'}`,
          },
          withCredentials: true,
        }
      )
      fetchCartItems() // Refresh cart items after clearing
    } catch (error) {
      console.error('Error clearing cart:', error)
    }
  }

  const handleUpdateQuantity = async (itemId, newQuantity) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    )
    setCartItems(updatedCartItems)
    calculateCartTotal(updatedCartItems)

    try {
      const response = await api.patch(
        `/updatecart/${itemId}`,
        { quantity: newQuantity },
        {
          headers: {
            'Content-Type': 'application/json',
            // Authorization: `Bearer ${'121|EhV0mSawWsaTTkmtsKIegUFlhWdpGLBpyMNLj3LM'}`,
          },
          withCredentials: true,
        }
      )

      if (response.status !== 200) {
        console.error('Failed to update quantity:', response.statusText)
        fetchCartItems() // Re-fetch cart items to reflect the correct state
      } else {
        console.log(
          `Successfully updated item ${itemId} to quantity ${newQuantity}`
        )
      }
    } catch (error) {
      console.error('Error updating item quantity:', error)
      fetchCartItems() // Re-fetch cart items to reflect the correct state
    }
  }

  const handleDecrementQuantity = async (itemId, newQuantity) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    )
    setCartItems(updatedCartItems)
    calculateCartTotal(updatedCartItems)

    try {
      const response = await api.patch(
        `/updateminuscart/${itemId}`,
        { quantity: newQuantity },
        {
          headers: {
            'Content-Type': 'application/json',
            // Authorization: `Bearer ${'121|EhV0mSawWsaTTkmtsKIegUFlhWdpGLBpyMNLj3LM'}`,
          },
          withCredentials: true,
        }
      )

      if (response.status !== 200) {
        console.error('Failed to update quantity:', response.statusText)
        fetchCartItems() // Re-fetch cart items to reflect the correct state
      } else {
        console.log(
          `Successfully decremented item ${itemId} to quantity ${newQuantity}`
        )
      }
    } catch (error) {
      console.error('Error updating item quantity:', error)
      fetchCartItems() // Re-fetch cart items to reflect the correct state
    }
  }

  const applyOverflow = () => {
    if (cartRef.current) {
      cartRef.current.style.maxHeight = '600px'
      cartRef.current.style.overflowY = 'auto'
    }
  }

  useEffect(() => {
    fetchCartItems()
    applyOverflow()
  }, [])

  useEffect(() => {
    applyOverflow()
  }, [cartItems])

  if (cartItems.length === 0) {
    return (
      <MainBg>
        <h1 className="text-center mt-5">Your Cart is Empty!</h1>
      </MainBg>
    )
  }

  return (
    <MainBg>
      <section className="container py-6">
        <div className="row justify-content-center">
          <h4 className="text-center my-4" style={{ fontSize: '24px' }}>
            Shopping Cart
          </h4>
          <div className="col-md-6">
            <div className="cart-items h-75" ref={cartRef}>
              {cartItems.map((item) => (
                <div className="item-border-top-bottom" key={item.id}>
                  <div className="d-flex">
                    <div className="col-md-8 d-flex">
                      <img
                        src={item.image}
                        style={{ height: '10rem', width: '10rem' }}
                        alt={item.name}
                      />
                      <div className="ms-3 flex-grow-1">
                        <span style={{ color: 'orange', fontSize: '16px' }}>
                          {item.name}
                        </span>
                        <br />
                        <span style={{ color: '#dadada', fontSize: '14px' }}>
                          Black/Medium <br />${item.price}
                        </span>
                      </div>
                    </div>
                    <div className="col-md-3" style={{ marginLeft: '20px' }}>
                      <div className="col-sm-2 d-flex">
                        <div className="align-items-center bg-white quantity-controls">
                          <button
                            className="btn btn-outline-light text-black"
                            style={{
                              fontSize: '16px',
                              backgroundColor: 'white',
                              height: '40px',
                              display: 'flex',
                              alignItems: 'center',
                            }}
                            onClick={() =>
                              handleDecrementQuantity(
                                item.id,
                                item.quantity - 1
                              )
                            }
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <p className="text-black mt-1">{item.quantity}</p>
                          <button
                            className="btn btn-outline-light text-black"
                            style={{
                              fontSize: '16px',
                              backgroundColor: 'white',
                              height: '40px',
                              display: 'flex',
                              alignItems: 'center',
                            }}
                            onClick={() =>
                              handleUpdateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            +
                          </button>
                        </div>
                        <button
                          className="btn"
                          onClick={() => handleRemoveItem(item.id)}
                          style={{ height: '40px' }}
                        >
                          <FontAwesomeIcon
                            icon={faTimes}
                            style={{
                              color: '#dadada',
                              fontSize: '16px',
                              paddingBottom: '20px',
                            }}
                          />
                        </button>
                      </div>
                      <div className="col-md-1 text-black">
                        <button
                          className="btn btn-outline-light mt-1"
                          style={{ width: '150px' }}
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-end mt-4">
              <div className="position-relative">
                <button
                  className="btn btn-outline-light"
                  style={{ fontSize: '16px' }}
                  onClick={handleClearCart}
                >
                  CLEAR CART
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-5 offset-md-1">
            <div
              className="p-3"
              style={{
                backgroundColor: 'black',
                color: '#fff',
                marginTop: '10px',
              }}
            >
              <div className="row p-3">
                <div className="col-6">
                  <h2 style={{ fontSize: '15px' }}>Cart totals</h2>
                  <div className="row mb-2" style={{ fontSize: '13px' }}>
                    <div className="col-6">SUBTOTAL</div>
                  </div>
                  <div className="row mb-2" style={{ fontSize: '13px' }}>
                    <div className="col-6">SHIPPING</div>
                  </div>
                </div>
                <div className="col-6">
                  <div
                    className="col-6 text-start mt-4"
                    style={{ fontSize: '13px' }}
                  >
                    ${cartTotal.toFixed(2)}
                  </div>
                  <div
                    className="col-12 text-start mb-3 mt-1"
                    style={{ fontSize: '13px' }}
                  >
                    Shipping costs will be calculated once you have provided
                    address.
                  </div>
                  <div className="row mb-3" style={{ fontSize: '12px' }}>
                    <div className="col-12">
                      <label htmlFor="country" className="form-label">
                        SELECT YOUR COUNTRY
                      </label>
                      <select
                        id="country"
                        className="form-select"
                        style={{
                          backgroundColor: 'transparent',
                          color: '#fff',
                          height: '60%',
                          fontSize: '12px',
                        }}
                      >
                        <option value="">Select Country</option>
                        {/* Add country options here */}
                      </select>
                    </div>
                    <div className="col-12 mt-3">
                      <label htmlFor="city" className="form-label">
                        CITY
                      </label>
                      <input
                        type="text"
                        id="city"
                        className="form-control"
                        style={{
                          backgroundColor: 'transparent',
                          color: '#fff',
                          height: '60%',
                          fontSize: '12px',
                        }}
                      />
                    </div>
                    <div className="col-12 mt-3">
                      <label htmlFor="postal-code" className="form-label">
                        POST CODE / ZIP
                      </label>
                      <input
                        type="text"
                        id="postal-code"
                        className="form-control"
                        style={{
                          backgroundColor: 'transparent',
                          color: '#fff',
                          height: '60%',
                          fontSize: '12px',
                        }}
                      />
                    </div>
                  </div>
                  <div className="text-center mb-1">
                    <button className="btn btn-outline-light size-control">
                      UPDATE TOTALS
                    </button>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row mt-3">
                <div className="col-6">TOTAL</div>
                <div className="col-6 text-end">${cartTotal.toFixed(2)}</div>
              </div>
              <div className="text-center mt-3 mb-1">
                <button className="btn btn-light text-black size-control1">
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainBg>
  )
}

export default ShoppingCart

