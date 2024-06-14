import React, { useEffect, useRef } from 'react'
import { useCart } from 'react-use-cart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css'
import './cart.css'
import MainBg from '../Background/MainBg'
const ShoppingCart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    addItem,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart()

  const cartRef = useRef(null) // Create a ref for the cart element

  // Function to check and apply overflow style
  const applyOverflow = () => {
    if (cartRef.current) {
      cartRef.current.style.maxHeight = '600px'
      cartRef.current.style.overflowY = 'auto'
    }
  }

  // Add default items to the cart when the component mounts
  //THis would never show your cart is empty as ref is always true
  useEffect(() => {
    if (isEmpty) {
      addItem({
        id: 1,
        name: 'Default Item 1',
        price: 10.0,
        quantity: 1,
        image: 'https://via.placeholder.com/150',
      })
      addItem({
        id: 2,
        name: 'Default Item 2',
        price: 20.0,
        quantity: 1,
        image: 'https://via.placeholder.com/150',
      })
      addItem({
        id: 3,
        name: 'Default Item 3',
        price: 30.0,
        quantity: 1,
        image: 'https://via.placeholder.com/150',
      })
      addItem({
        id: 4,
        name: 'Default Item 4',
        price: 40.0,
        quantity: 1,
        image: 'https://via.placeholder.com/150',
      })
      addItem({
        id: 5,
        name: 'Default Item 5',
        price: 50.0,
        quantity: 1,
        image: 'https://via.placeholder.com/150',
      })
      addItem({
        id: 6,
        name: 'Default Item 6',
        price: 60.0,
        quantity: 1,
        image: 'https://via.placeholder.com/150',
      })
    }
    applyOverflow() // Apply overflow when the component mounts
  }, [isEmpty, addItem])

  useEffect(() => {
    applyOverflow() // Call applyOverflow when component mounts or updates
  }, [items]) // Re-run when items change

  if (isEmpty) return <MainBg><h1 className="text-center mt-5">Your Cart is Empty!</h1></MainBg>

  return (
    <section className="container py-6">
      <MainBg>
        <div className="row justify-content-center">
          <h4 className="text-center my-4" style={{ fontSize: '24px' }}>
            Shopping Cart
          </h4>
          <div className="col-md-6 ">
            <div className="cart-items h-75" ref={cartRef}>
              {items.map((item, index) => (
                <div className="item-border-top-bottom" key={index}>
                  <div className="d-flex mb-3">
                    <div className="col-md-8 d-flex">
                      <img
                        src={item.image}
                        style={{ height: '6rem' }}
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
                              updateItemQuantity(item.id, item.quantity - 1)
                            }
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
                              updateItemQuantity(item.id, item.quantity + 1)
                            }
                          >
                            +
                          </button>
                        </div>
                        <button
                          className="btn"
                          onClick={() => removeItem(item.id)}
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
            <div className="text-end mt-4 ">
              <div  className='position-relative'>
                <button
                  className="btn btn-outline-light "
                  style={{ fontSize: '16px' }}
                  onClick={() => emptyCart()}
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
      </MainBg>
    </section>
  )
}

export default ShoppingCart
