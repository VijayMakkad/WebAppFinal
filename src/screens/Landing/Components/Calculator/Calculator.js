import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import './Calculator.css'
export default function Calculator() {
    return (
    <div className="calculator p-4 p-md-5 d-flex flex-column">
        <div className="absimg">
          <img src="/images/common/calculator.png" />
        </div>
        <div className="calc-heading d-flex flex-column justify-content-evenly align-items-start mt-md-5 mb-md-5">
          <h1>SIP Calculator</h1>
          <div className="calc-gradient mt-2">
          </div>
        </div>
        <div className="calc-input d-flex flex-column row-gap-2 row-gap-md-5">
          <div className="d-flex flex-column row-gap-1 row-gap-md-3">
            <div className="calc-text">
              <h4 className="calc-investperiod">Investment Amount</h4>
            </div>
            <div className="calc-field">
              <input type="text" name="Amount"  id="investment" style={{border:'none', width:'60%' }}/>
            </div>
          </div>
          <div className="d-flex flex-column row-gap-1 row-gap-md-3">
            <div className="calc-text">
              <h4 className="calc-investperiod">Time Period</h4>
            </div>
            <div className="calc-field">
              <input type="date" name="" id="" style={{border:'none', width:'60%'}} />
            </div>
          </div>
          
        </div>
        <div className="calc-estimates mt-2  d-flex flex-row" style={{ flexGrow: 1}}>
          <div className="calc-estimation col-6 col-md-8 d-flex flex-row justify-content-between align-items-center">
            <div className="d-flex flex-column justify-content-around align-items-start h-100">
              <div>
                <h4>Invested Amount</h4>
                <h4>14000</h4>
              </div>
              <div>
                <h4>Total</h4>
              </div>
            </div>

            <div className="d-flex flex-column justify-content-around align-items-start h-100">
              <div>
                <h4>Estimated Returns</h4>
                <h4>5000</h4>
              </div>
              
              <div>
                <h4>19000</h4>
              </div>
            </div>
          </div>
          <div className="calc-estimation col-6 col-md-4 d-flex flex-column justify-content-center align-items-center">
            <button style={{border:'2px solid white', background:'none', width:'100%', height:'40px'}}>Start Now</button>
          </div>
        </div>
    </div>
  )
}
