import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Modal from './Modal'
import axios from 'axios' // Make sure axios is imported

const Account = ({ isOpen, onClose }) => {
  const initialValues = {
    shippingFirstName: '',
    country: '',
    shippingState: '',
    address1: '',
    shippingZip: '',
    shippingCity: '',
    shippingPhone: '',
    shippingEmail: '',
  }

  const validationSchema = Yup.object().shape({
    shippingFirstName: Yup.string().required('Name* is required'),
    country: Yup.string().required('Country* is required'),
    shippingState: Yup.string().required('State* is required'),
    address1: Yup.string().required('Street address* is required'),
    shippingZip: Yup.string().required('Postcode/ZIP* is required'),
    shippingCity: Yup.string().required('Town/City* is required'),
    shippingPhone: Yup.string().required('Number* is required'),
    shippingEmail: Yup.string()
      .email('Invalid email')
      .required('Email* is required'),
  })

  const saveAddress = async (newAddress) => {
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/users/address/post',
        newAddress,
        {
          headers: {
            // Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      )
      console.log('Address saved successfully:', response)
      // Handle success: update state, show success message, etc.
    } catch (error) {
      console.error('Error saving address:', error)
      if (error.response) {
        console.error('Response data:', error.response.data)
      }
      // Handle error: show error message, retry logic, etc.
    }
  }


  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const newShippingAddress = {
        first_name: values.shippingFirstName,
        country: values.country,
        state: values.shippingState,
        address1: values.address1,
        address2:'-',
        pincode: values.shippingZip,
        city: values.shippingCity,
        mobile_number: values.shippingPhone,
        email: values.shippingEmail,
      }
      console.log('Submitting form:', newShippingAddress)
      // Replace 'YOUR_AUTH_TOKEN' with your actual authentication token
      await saveAddress(
        newShippingAddress,
        // '121|EhV0mSawWsaTTkmtsKIegUFlhWdpGLBpyMNLj3LM'
      )
      onClose() // Close modal or perform any other action upon successful submission
    } catch (error) {
      console.error('Error handling form submission:', error)
    } finally {
      setSubmitting(false) // Always set submitting state to false, regardless of success or failure
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="form-container">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="row p-2">
                <div className="col-lg-12 p-4">
                  <div className="mb-1">
                    <h4>Shipping Address</h4>
                  </div>
                  <div className="row mb-1">
                    <div className="col-md-6">
                      <Field
                        type="text"
                        name="shippingFirstName"
                        className="custom-input"
                        placeholder="Name"
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
                        name="country"
                        className="custom-input"
                        placeholder="Country"
                      />
                      <ErrorMessage
                        name="country"
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
                        State
                      </option>
                      <option value="state1">State 1</option>
                      <option value="state2">State 2</option>
                    </Field>
                    <ErrorMessage
                      name="shippingState"
                      component="div"
                      className="error-message"
                    />
                  </div>
                  <div className="mb-1">
                    <Field
                      type="text"
                      name="address1"
                      className="custom-input"
                      placeholder="Street Address"
                    />
                    <ErrorMessage
                      name="address1"
                      component="div"
                      className="error-message"
                    />
                  </div>
                  <div className="mb-1">
                    <Field
                      type="text"
                      name="shippingZip"
                      className="custom-input"
                      placeholder="Postcode / ZIP"
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
                      placeholder="Town / City"
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
                      placeholder="Phone"
                    />
                    <ErrorMessage
                      name="shippingPhone"
                      component="div"
                      className="error-message"
                    />
                  </div>
                  <div className="mb-1">
                    <Field
                      type="text"
                      name="shippingEmail"
                      className="custom-input"
                      placeholder="Email"
                    />
                    <ErrorMessage
                      name="shippingEmail"
                      component="div"
                      className="error-message"
                    />
                  </div>
                  <div className="mb-3 text-center">
                    <button
                      type="submit"
                      className="btn btn-dark"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Saving...' : 'Save Address'}
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Modal>
  )
}

export default Account
