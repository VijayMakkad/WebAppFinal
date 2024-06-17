import React, { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import MainBg from '../Background/MainBg'
import './account.css' // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const Account = () => {
  const [savedBillingAddresses, setSavedBillingAddresses] = useState([])
  const [savedShippingAddresses, setSavedShippingAddresses] = useState([])
  const [isFormVisible, setIsFormVisible] = useState(true)

  const initialValues = {
    billingFirstName: '',
    billingLastName: '',
    billingState: '',
    billingStreet: '',
    billingZip: '',
    billingCity: '',
    billingPhone: '',
    billingEmail: '',
    shippingFirstName: '',
    shippingLastName: '',
    shippingState: '',
    shippingStreet: '',
    shippingZip: '',
    shippingCity: '',
    shippingPhone: '',
    shippingEmail: '',
  }

  const validationSchema = Yup.object().shape({
    billingFirstName: Yup.string().required('First name is required'),
    billingLastName: Yup.string().required('Last name is required'),
    billingState: Yup.string().required('State is required'),
    billingStreet: Yup.string().required('Street address is required'),
    billingZip: Yup.string().required('Postcode/ZIP is required'),
    billingCity: Yup.string().required('Town/City is required'),
    billingPhone: Yup.string().required('Phone is required'),
    billingEmail: Yup.string()
      .email('Invalid email')
      .required('Email is required'),
    shippingFirstName: Yup.string().required('First name is required'),
    shippingLastName: Yup.string().required('Last name is required'),
    shippingState: Yup.string().required('State is required'),
    shippingStreet: Yup.string().required('Street address is required'),
    shippingZip: Yup.string().required('Postcode/ZIP is required'),
    shippingCity: Yup.string().required('Town/City is required'),
    shippingPhone: Yup.string().required('Phone is required'),
    shippingEmail: Yup.string()
      .email('Invalid email')
      .required('Email is required'),
  })

  const handleSubmit = (values) => {
    const newBillingAddress = {
      firstName: values.billingFirstName,
      lastName: values.billingLastName,
      state: values.billingState,
      street: values.billingStreet,
      zip: values.billingZip,
      city: values.billingCity,
      phone: values.billingPhone,
      email: values.billingEmail,
    }

    const newShippingAddress = {
      firstName: values.shippingFirstName,
      lastName: values.shippingLastName,
      state: values.shippingState,
      street: values.shippingStreet,
      zip: values.shippingZip,
      city: values.shippingCity,
      phone: values.shippingPhone,
      email: values.shippingEmail,
    }

    setSavedBillingAddresses([...savedBillingAddresses, newBillingAddress])
    setSavedShippingAddresses([...savedShippingAddresses, newShippingAddress])
    setIsFormVisible(false)
  }

  return (
    <MainBg>
      <div className="p-5">
        <div className="text-center mt-3">
          <h3>My Account</h3>
        </div>
        {isFormVisible ? (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="row p-2">
                  {/* Billing Address */}
                  <div className="col-lg-6 p-4">
                    <div className="mb-1">
                      <h4>Billing Address</h4>
                    </div>
                    <div className="row mb-1">
                      <div className="col-md-6">
                        <Field
                          type="text"
                          name="billingFirstName"
                          className="custom-input"
                          placeholder="First name *"
                        />
                        <ErrorMessage
                          name="billingFirstName"
                          component="div"
                          className="error-message"
                        />
                      </div>
                      <div className="col-md-6">
                        <Field
                          type="text"
                          name="billingLastName"
                          className="custom-input"
                          placeholder="Last name *"
                        />
                        <ErrorMessage
                          name="billingLastName"
                          component="div"
                          className="error-message"
                        />
                      </div>
                    </div>
                    <div className="mb-1 d-flex justify-content-between">
                      <Field
                        as="select"
                        name="billingState"
                        className="custom-input"
                      >
                        <option value="" disabled>
                          State *
                        </option>
                        {/* Add your state options here */}
                        <option value="state1">State 1</option>
                        <option value="state2">State 2</option>
                      </Field>
                      <FontAwesomeIcon
                        icon={faCaretDown}
                        style={{ color: '#fafafa' }}
                      />
                      <ErrorMessage
                        name="billingState"
                        component="div"
                        className="error-message"
                      />
                    </div>
                    <div className="mb-1">
                      <Field
                        type="text"
                        name="billingStreet"
                        className="custom-input"
                        placeholder="Street Address *"
                      />
                      <ErrorMessage
                        name="billingStreet"
                        component="div"
                        className="error-message"
                      />
                    </div>
                    <div className="mb-1">
                      <Field
                        type="text"
                        name="billingZip"
                        className="custom-input"
                        placeholder="Postcode / ZIP *"
                      />
                      <ErrorMessage
                        name="billingZip"
                        component="div"
                        className="error-message"
                      />
                    </div>
                    <div className="mb-1">
                      <Field
                        type="text"
                        name="billingCity"
                        className="custom-input"
                        placeholder="Town / City *"
                      />
                      <ErrorMessage
                        name="billingCity"
                        component="div"
                        className="error-message"
                      />
                    </div>
                    <div className="mb-1">
                      <Field
                        type="text"
                        name="billingPhone"
                        className="custom-input"
                        placeholder="Phone *"
                      />
                      <ErrorMessage
                        name="billingPhone"
                        component="div"
                        className="error-message"
                      />
                    </div>
                    <div className="mb-1">
                      <Field
                        type="email"
                        name="billingEmail"
                        className="custom-input"
                        placeholder="Email *"
                      />
                      <ErrorMessage
                        name="billingEmail"
                        component="div"
                        className="error-message"
                      />
                    </div>
                  </div>

                  {/* Shipping Address */}
                  <div className="col-lg-6 p-4">
                    <div className="mb-1">
                      <h4>Shipping Address</h4>
                    </div>
                    <div className="row mb-1">
                      <div className="col-md-6">
                        <Field
                          type="text"
                          name="shippingFirstName"
                          className="custom-input"
                          placeholder="First name *"
                        />
                        <ErrorMessage
                          name="shippingFirstName"
                          component="div"
                          className="error-message"
                        />
                      </div>
                      <div className="col-md-6">
                        <Field
                          type="text"
                          name="shippingLastName"
                          className="custom-input"
                          placeholder="Last name *"
                        />
                        <ErrorMessage
                          name="shippingLastName"
                          component="div"
                          className="error-message"
                        />
                      </div>
                    </div>
                    <div className="mb-1 d-flex justify-content-between">
                      <Field
                        as="select"
                        name="shippingState"
                        className="custom-input"
                      >
                        <option value="" disabled>
                          State *
                        </option>
                        {/* Add your state options here */}
                        <option value="state1">State 1</option>
                        <option value="state2">State 2</option>
                      </Field>
                      <FontAwesomeIcon
                        icon={faCaretDown}
                        style={{ color: '#fafafa' }}
                      />
                      <ErrorMessage
                        name="shippingState"
                        component="div"
                        className="error-message"
                      />
                    </div>
                    <div className="mb-1">
                      <Field
                        type="text"
                        name="shippingStreet"
                        className="custom-input"
                        placeholder="Street Address *"
                      />
                      <ErrorMessage
                        name="shippingStreet"
                        component="div"
                        className="error-message"
                      />
                    </div>
                    <div className="mb-1">
                      <Field
                        type="text"
                        name="shippingZip"
                        className="custom-input"
                        placeholder="Postcode / ZIP *"
                      />
                      <ErrorMessage
                        name="shippingZip"
                        component="div"
                        className="error-message"
                      />
                    </div>
                    <div className="mb-1">
                      <Field
                        type="text"
                        name="shippingCity"
                        className="custom-input"
                        placeholder="Town / City *"
                      />
                      <ErrorMessage
                        name="shippingCity"
                        component="div"
                        className="error-message"
                      />
                    </div>
                    <div className="mb-1">
                      <Field
                        type="text"
                        name="shippingPhone"
                        className="custom-input"
                        placeholder="Phone *"
                      />
                      <ErrorMessage
                        name="shippingPhone"
                        component="div"
                        className="error-message"
                      />
                    </div>
                    <div className="mb-1">
                      <Field
                        type="email"
                        name="shippingEmail"
                        className="custom-input"
                        placeholder="Email *"
                      />
                      <ErrorMessage
                        name="shippingEmail"
                        component="div"
                        className="error-message"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-3">
                  <button
                    className="btn btn-dark"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    SAVE ADDRESS
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        ) : (
          <>
            <div className="row p-5">
              <p
                style={{
                  color: 'white',
                  fontSize: '14px',
                  marginBottom: '0px',
                  padding: '0px 0px 0px 50px',
                }}
              >
                The following page will be used on the checkout page by default.
              </p>
              <div className="col-md-6 p-5">
                <h3 style={{ fontWeight: '300', width: '90%' }}>
                  Billing address
                </h3>
                {savedBillingAddresses.map((address, index) => (
                  <div key={index} className="row mt-5">
                    <div className="col-md-6">
                      <div className="row">
                        <p className="py-0 mb-0" style={{ color: 'white' }}>
                          DELIVERY ADDRESS
                        </p>
                        <p
                          className="mt-0 py-0"
                          style={{
                            fontSize: '14px',
                            color: '#ffcc00',
                            width: '60%',
                          }}
                        >
                          {address.street}
                        </p>
                      </div>
                      <div className="row">
                        <p className="py-0 mb-0" style={{ color: 'white' }}>
                          STATE
                        </p>
                        <p
                          className="mt-0 py-0"
                          style={{ fontSize: '14px', color: '#ffcc00' }}
                        >
                          {address.state}
                        </p>
                      </div>
                      <div className="row">
                        <p className="py-0 mb-0" style={{ color: 'white' }}>
                          CITY
                        </p>
                        <p
                          className="mt-0 py-0"
                          style={{ fontSize: '14px', color: '#ffcc00' }}
                        >
                          {address.city}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <p className="py-0 mb-0" style={{ color: 'white' }}>
                          BILLING OPTIONS
                        </p>
                        <p
                          className="mt-0 py-0"
                          style={{ fontSize: '14px', color: '#ffcc00' }}
                        >
                          UPI
                        </p>
                      </div>
                      <div className="row">
                        <p className="py-0 mb-0" style={{ color: 'white' }}>
                          PIN CODE
                        </p>
                        <p
                          className="mt-0 py-0"
                          style={{ fontSize: '14px', color: '#ffcc00' }}
                        >
                          {address.zip}
                        </p>
                      </div>
                      <div className="row">
                        <p className="py-0 mb-0" style={{ color: 'white' }}>
                          CONTACT NUMBER
                        </p>
                        <p
                          className="mt-0 py-0"
                          style={{ fontSize: '14px', color: '#ffcc00' }}
                        >
                          {address.phone}
                        </p>
                      </div>
                      <div className="row">
                        <p className="py-0 mb-0" style={{ color: 'white' }}>
                          EMAIL
                        </p>
                        <p
                          className="mt-0 py-0"
                          style={{ fontSize: '14px', color: '#ffcc00' }}
                        >
                          {address.email}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                <a
                  href=""
                  style={{ color: '#ffcc00' }}
                  onClick={() => setIsFormVisible(true)}
                >
                  ADD ANOTHER
                </a>
              </div>

              <div className="col-md-6 p-5">
                <h3 style={{ fontWeight: '300', width: '90%' }}>
                  Shipping address
                </h3>
                {savedBillingAddresses.map((address, index) => (
                  <div key={index} className="row mt-5">
                    <div className="col-md-6">
                      <div className="row">
                        <p className="py-0 mb-0" style={{ color: 'white' }}>
                          DELIVERY ADDRESS
                        </p>
                        <p
                          className="mt-0 py-0"
                          style={{
                            fontSize: '14px',
                            color: '#ffcc00',
                            width: '60%',
                          }}
                        >
                          {address.street}
                        </p>
                      </div>
                      <div className="row">
                        <p className="py-0 mb-0" style={{ color: 'white' }}>
                          STATE
                        </p>
                        <p
                          className="mt-0 py-0"
                          style={{ fontSize: '14px', color: '#ffcc00' }}
                        >
                          {address.state}
                        </p>
                      </div>
                      <div className="row">
                        <p className="py-0 mb-0" style={{ color: 'white' }}>
                          CITY
                        </p>
                        <p
                          className="mt-0 py-0"
                          style={{ fontSize: '14px', color: '#ffcc00' }}
                        >
                          {address.city}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <p className="py-0 mb-0" style={{ color: 'white' }}>
                          DELIVERY OPTIONS
                        </p>
                        <p
                          className="mt-0 py-0"
                          style={{ fontSize: '14px', color: '#ffcc00' }}
                        >
                          Standard Delivery
                        </p>
                      </div>
                      <div className="row">
                        <p className="py-0 mb-0" style={{ color: 'white' }}>
                          PIN CODE
                        </p>
                        <p
                          className="mt-0 py-0"
                          style={{ fontSize: '14px', color: '#ffcc00' }}
                        >
                          {address.zip}
                        </p>
                      </div>
                      <div className="row">
                        <p className="py-0 mb-0" style={{ color: 'white' }}>
                          CONTACT NUMBER
                        </p>
                        <p
                          className="mt-0 py-0"
                          style={{ fontSize: '14px', color: '#ffcc00' }}
                        >
                          {address.phone}
                        </p>
                      </div>
                      <div className="row">
                        <p className="py-0 mb-0" style={{ color: 'white' }}>
                          EMAIL
                        </p>
                        <p
                          className="mt-0 py-0"
                          style={{ fontSize: '14px', color: '#ffcc00' }}
                        >
                          {address.email}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                <a
                  href=""
                  style={{ color: '#ffcc00', }}
                  onClick={() => setIsFormVisible(true)}
                >
                  ADD ANOTHER
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </MainBg>
  )
}

export default Account
