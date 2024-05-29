import React from "react";
import Modal from 'react-bootstrap/modal'
import "./Login.css";

import 'bootstrap/dist/css/bootstrap.min.css';

function Login({onHide,show}) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
    >      
        <div className="login-container d-flex justify-content-center align-items-center">
          <div className="login-box row w-100 d-flex justify-content-center align-items-stretch">
            <div className="login-left col-lg-6 d-flex flex-column justify-content-center p-5">
              {/* <img
                src="/assets/easygold-logo.png"
                alt="easygold logo"
                className="img-fluid mb-4"
                style={{ maxWidth: "150px" }}
              /> */}
              <h1 className="login-title">
                Your Journey to Digital Gold Greatness Starts Here.
              </h1>
              <p>Welcome Back, Please login to your account</p>
              <form>
                <div className="form-group" style={{ marginBottom: "10px" }}>
                  <input type="text" className="form-control" placeholder="Phone" />
                </div>
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
                >
                  Sign Up
                </button>
              </form>
            </div>
            <div className="login-right col-lg-6 d-flex align-items-center justify-content-center p-5">
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

export default Login;
