import React, { useState, useEffect } from 'react'
import MainBg from '../Background/MainBg'
import Account from './Account'
import api from '../../utils/apiHandler'
import './account.css' // Ensure we have the CSS imported
import { useSelector } from 'react-redux'
import { selectAuthToken } from '../../features/auth/authSlice' // Adjust this import according to your structure

const AccountPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [savedShippingAddresses, setSavedShippingAddresses] = useState([])
  const authToken = useSelector(selectAuthToken)

  useEffect(() => {
    fetchShippingAddresses()
  }, [authToken]) // Fetch addresses when the token changes

  const fetchShippingAddresses = async () => {
    try {
      const response = await api.get('/users/address/get', {
        headers: {
          // Authorization: `Bearer ${'127|7PDXL6PlYS1DIwKhV2dcywy643EYHMYWBwTzccgm'}`,
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      setSavedShippingAddresses(response.data.addresses || [])
    } catch (error) {
      console.error('Error fetching addresses:', error)
    }
  }

  const handleOpenModal = (e) => {
    e.preventDefault()
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    fetchShippingAddresses()
  }

  const handleSaveAddress = async (newAddress) => {
    try {
      // Save address to API
      const response = await api.post('/users/address/post', newAddress, {
        headers: {
          // Authorization: `Bearer ${'121|EhV0mSawWsaTTkmtsKIegUFlhWdpGLBpyMNLj3LM'}`,
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })

      // Assuming the API responds with the newly added address
      const savedAddress = response.data.address

      // Update state to include the new address
      setSavedShippingAddresses((prevAddresses) => [
        ...prevAddresses,
        savedAddress,
      ])
      
    } catch (error) {
      console.error('Error saving address:', error)
    }
  }

  return (
    <MainBg>
      <div className="p-3">
        <div className="p-2 text-center">
          <h3>My Account</h3>
        </div>
        <Account
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSaveAddress={handleSaveAddress}
        />
        <div className="row p-5">
          <p
            style={{
              color: 'white',
              fontSize: '14px',
              marginBottom: '0px',
              padding: '0px 0px 0px 50px',
            }}
          >
            The following address will be used on the checkout page by default.
          </p>
          <div className="col-md-12 p-5">
            <h3 style={{ fontWeight: '300', width: '90%' }}>
              Shipping addresses
            </h3>
            {savedShippingAddresses.length === 0 ? (
              <p style={{ color: 'white' }}>No shipping addresses found.</p>
            ) : (
              <div className="row">
                {savedShippingAddresses.map((address, index) => (
                  <div key={index} className="col-md-6 mb-4">
                    <div className="card transparent-card h-100">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-6">
                            <p className="mb-1 text-white">DELIVERY ADDRESS</p>
                            <p className="text-warning mb-3">
                              {address.address1}
                            </p>
                            <p className="mb-1 text-white">STATE</p>
                            <p className="text-warning mb-3">{address.state}</p>
                            <p className="mb-1 text-white">CITY</p>
                            <p className="text-warning mb-3">{address.city}</p>
                          </div>
                          <div className="col-6">
                            <p className="mb-1 text-white">DELIVERY OPTIONS</p>
                            <p className="text-warning mb-3">
                              Standard Delivery
                            </p>
                            <p className="mb-1 text-white">PIN CODE</p>
                            <p className="text-warning mb-3">
                              {address.pincode}
                            </p>
                            <p className="mb-1 text-white">CONTACT NUMBER</p>
                            <p className="text-warning mb-3">
                              {address.mobile_number}
                            </p>
                            <p className="mb-1 text-white">EMAIL</p>
                            <p className="text-warning">{address.email}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <a href="" style={{ color: '#ffcc00' }} onClick={handleOpenModal}>
              {savedShippingAddresses.length === 0
                ? 'Add Address'
                : 'Add Another'}
            </a>
          </div>
        </div>
      </div>
    </MainBg>
  )
}

export default AccountPage
