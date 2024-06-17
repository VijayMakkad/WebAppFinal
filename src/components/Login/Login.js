import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


import "./Login.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const isDateInPast = (date) => {
  return new Date(date) < new Date();
};

function Login({ onHide, show }) {
  const [login, setLogin] = useState('Login');
  const [prev, setPrev] = useState('Login')
  const loginValidation = Yup.object().shape({
     phone: Yup.string()
      .matches(/^\d+$/, 'Phone number must contain only numbers')
      .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
      .required('Phone number is required')
  })

  const signupValidation = Yup.object().shape({
    username: Yup.string().required('Username is Required'),
    phone: Yup.string()
      .matches(/^\d+$/, 'Phone number must contain only numbers')
      .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
      .required('Phone number is required'),
    dob:Yup.date()
      .required('Date of birth is required')
      .test('is-valid-date', 'Date of birth must be a valid date', value => !isNaN(Date.parse(value)))
      .test('is-past-date', 'Date of birth must be in the past', value => isDateInPast(value))
  })

  const initialLogin = {
    phone:''
  }

  const initialSignup = {
    username: '',
    phone: '',
    dob: ''
  };

  const onSignupSubmit = (values, { setSubmitting }) => {
    console.log('Form data', values);
    setSubmitting(false);
    // Assuming you want to navigate to OTP screen after successful submission
    setLogin('OTP');
    setPrev('Signup');
  };

  const onLoginSubmit = (values, { setSubmitting }) => {
    console.log('Form data', values);
    setSubmitting(false);
    setLogin('OTP') 
    setPrev('Login')
  };
    
  if(login=='Login')
{  return (
    <Modal
      show={show}
      onHide={onHide}
      onExited={()=>setLogin(['Login'])}
      size="lg"
      centered
    >      
        <div className="login-container d-flex justify-content-center align-items-center">
          <div className="login-box row w-100 d-flex justify-content-center align-items-stretch">
            <div className="login-left col-lg-6 d-flex flex-column justify-content-evenly p-5">
              <div>                
                <h1 className="login-title">
                  Your Journey to Digital Gold Greatness Starts Here.
                </h1>
                <p>Welcome Back, Please login to your account</p>
              </div>
                <Formik
                  initialValues={initialLogin}
                  validationSchema={loginValidation}
                  onSubmit={onLoginSubmit}
                  validateOnMount={true}
                >
                  {({ isSubmitting, isValid }) => (
                    <Form style={{flexGrow:1}} className="d-flex flex-column justify-content-evenly" >
                      <div className="form-group" style={{ marginBottom: "10px" }}>
                        
                        <Field type="text" id="phone" name="phone" className="form-control" placeholder="Phone" />
                        <ErrorMessage style={{color:'black', marginTop:'10px', textAlign:'center'}} name="phone" component="div" />
                      </div>
                      <div className="d-flex justify-content-center">                  
                        <button
                          type="submit"
                          className="btn btn-dark"
                          style={{ marginRight: "10px", width: "40%" }}
                          disabled={isSubmitting || !isValid}
                        >
                          Next
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-dark"
                          style={{ marginRight: "10px", width: "40%" }}
                          onClick={()=>setLogin('Signup')}
                        >
                          Sign Up
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
            </div>
            <div className="login-right col-lg-6 d-flex align-items-center justify-content-center">
              <img
                src="/assets/login-illus.png"
                alt="illustration"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
    </Modal>
  );
  }
  else if (login == 'OTP') {
    return (      
      <Modal
        show={show}
        onHide={onHide}
        onExited={()=>setLogin(['Login'])}
        size="lg"
        centered
      >      
          <div className="login-container d-flex justify-content-center align-items-center">
            <div className="login-box row w-100 d-flex justify-content-center align-items-stretch">
            <div className="login-left col-lg-6 d-flex flex-column justify-content-evenly p-5">
              <div>
                <h1 className="login-title">
                  Your Journey to Digital Gold Greatness Starts Here.
                </h1>
                <p>Welcome Back, Please login to your account</p>
              </div>
                <form className="d-flex flex-column justify-content-evenly" style={{flexGrow:1}}>
                  <div className="form-group" style={{ marginBottom: "10px" }}>
                    <input type="text" className="form-control" placeholder="OTP" />
                  </div>
                  
                  <div className="form-check mb-3">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="remember"
                    />
                    <label className="form-check-label" htmlFor="remember">
                      Remember me
                    </label>
                  </div>
                  <div className="d-flex justify-content-center">                    
                    <button
                      type="button"
                      className="btn btn-dark"
                      style={{ marginRight: "10px", width: "40%" }}
                    >
                      Login
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-dark"
                      style={{ marginRight: "10px", width: "40%" }}
                      onClick={()=>setLogin(prev)}
                    >
                      Back
                    </button>
                  </div>
                </form>
              </div>
              <div className="login-right col-lg-6 d-flex align-items-center justify-content-center">
                <img
                  src="/assets/login-illus.png"
                  alt="illustration"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
      </Modal>
    );
  }
  else if(login=='Signup') {
    return (
      <Modal
        show={show}
        onHide={onHide}
        onExited={()=>setLogin(['Login'])}
        size="lg"
        centered
      >
        <div className="login-container d-flex justify-content-center align-items-center">
          <div className="login-box row w-100 d-flex justify-content-center align-items-stretch">
            <div className="login-left col-lg-6 d-flex flex-column justify-content-evenly p-5">
              <h1 className="login-title">
                Your Journey to Digital Gold Greatness Starts Here.
              </h1>
              <p>Welcome to Easygold</p>

               <Formik
                initialValues={initialSignup}
                validationSchema={signupValidation}
                onSubmit={onSignupSubmit}
                validateOnMount={true}
              >
                {({ isSubmitting, isValid, dirty, errors }) => (
                  <Form className="d-flex flex-column justify-content-evenly" style={{ flexGrow: 1}}>
                    <div className="form-group" style={{ marginBottom: "10px" }}>
                      <Field type="text" id="username" name="username" className="form-control" placeholder="Username" />
                    </div>
                    <div className="form-group" style={{ marginBottom: "10px" }}>
                      <Field type="text" id="phone" name="phone" className="form-control" placeholder="Phone" />
                    </div>
                    <div className="form-group" style={{ marginBottom: "10px" }}>
                      <Field type="date" id="dateOfBirth" name="dob" className="form-control" placeholder="Date Of Birth" />
                    </div>
                    {dirty && Object.keys(errors).length > 0 && (
                    <div className="error-message-box" >
                      {Object.values(errors).map((error, index) => (
                        <div style={{ color: 'black', marginTop: '10px', textAlign: 'center' }} key={index}>{error}</div>
                      ))}
                    </div>
                    )}
                    <div className="d-flex justify-content-center mt-3">
                      <button
                        type="submit"
                        className="btn btn-dark"
                        style={{ width: "40%" }}
                        disabled={isSubmitting || !isValid}
                      >
                        Sign Up
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
                <div className="d-flex flex-column justify-content-center align-items-center m-3">                    
                  <a id='alreadymember' style={{ color: 'black', textDecoration: 'none', cursor: 'pointer', display: 'flex',flexDirection:'column' }} onClick={() => setLogin('Login')}>Already a Member?
                    <span id='signuptologin'></span>
                  </a>
                </div>
            </div>
            <div className="login-right col-lg-6 d-flex align-items-center justify-content-center">
              <img
                src="/assets/login-illus.png"
                alt="illustration"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default Login;
