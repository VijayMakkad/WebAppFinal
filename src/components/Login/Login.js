import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal'
import "./Login.css";

import 'bootstrap/dist/css/bootstrap.min.css';


function Login({ onHide, show }) {
  const [login, setLogin] = useState('Login');
  const [prev,setPrev] = useState('Login')
  
  if(login=='Login')
{  return (
    <Modal
      show={show}
      onHide={onHide}
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
              <form className="d-flex flex-column justify-content-evenly" style={{flexGrow:1,}}>
                <div className="form-group" style={{ marginBottom: "10px" }}>
                  <input type="text" className="form-control" placeholder="Phone" />
                </div>
                <div className="d-flex justify-content-center">                  
                  <button
                    type="button"
                    className="btn btn-dark"
                    style={{ marginRight: "10px", width: "40%" }}
                    onClick={()=>{
                      setLogin('OTP') 
                      setPrev('Login')
                    }}
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
  else if (login == 'OTP') {
    return (      
      <Modal
        show={show}
        onHide={onHide}
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
              <form>
                <div className="form-group" style={{ marginBottom: "10px" }}>
                  <input type="text" className="form-control" placeholder="Username" />
                </div>
                <div className="form-group" style={{ marginBottom: "10px" }}>
                  <input type="text" className="form-control" placeholder="Phone" />
                </div>
                <div className="form-group" style={{ marginBottom: "10px" }}>
                  <input type="date" className="form-control" placeholder="Date Of Birth" />
                </div>
                <div className="d-flex justify-content-center mt-3">
                  <button
                    type="button"
                    className="btn btn-dark"
                    style={{width: "40%"}}
                    onClick={() => {
                      setLogin('OTP')
                      setPrev('Signup')
                    }}
                  >
                    Sign Up
                  </button>
                </div>
              </form>
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
