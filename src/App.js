import React, { Component } from 'react';
import Modal from './Modal';
import CFLogo from './CF_logo_RGB_NEG.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.handlClick = this.handlClick.bind(this);
    }

    handlClick(){
        console.log("Clicked");
    }

    render() {
    return (
    <div className="home">
          <body>
              <header className="home-header">
                  <img src={CFLogo}/>
              </header>
              <div className="home-main">
                  <div className="home-left">
                      <div className="tab">
                          <div className="tab-links link-1">
                              <h5>Step 1</h5>
                              <h4>Transaction Info</h4>
                          </div>
                          <div className="tab-links">
                              <h5>Step 2</h5>
                              <h4>Recipient Info</h4>
                          </div>
                          <div className="tab-links">
                              <h5>Step 3</h5>
                              <h4>Make Payment</h4>
                          </div>
                      </div>
                      <div className="transaction">
                          <h2>Let's set up your transaction!</h2>
                          <h3>Specify the amount to be received.</h3>
                          <div className="transaction-box box-1">
                              <h2>You send</h2>
                              <h1>€2,000.00</h1>
                          </div>
                          <div className="transaction-box">
                              <h2>Receiver Gets</h2>
                              <h1>£1,717.94</h1>
                          </div>
                          <button onClick={this.handlClick} className="next-btn">
                              <h3>Next</h3>
                          </button>
                          <div className="footer">
                              <div className="footer-start">
                                  <h6>©2016 CurrencyFair</h6>
                              </div>
                              <h6>Help & Support</h6>
                              <h6 className="footer-legal">Legal Stuff</h6>
                          </div>
                      </div>
                  </div>
                  <div className="home-right">
                      <div className="home-panel">
                          <div className="exchange-details black">
                              <h4>Sending Details</h4>
                          </div>
                          <div className="exchange-details ">
                              <h4>You Send</h4>
                              <h4 className="col-2 black">€2,000.00</h4>
                          </div>
                          <div className="exchange-details black">
                              <h4>Receiving Details</h4>
                              <h5 className="col-2"> As of right now</h5>
                          </div>
                          <div className="exchange-details-large whitebg">
                              <div  className="col-1">
                                  <h4>Rate</h4>
                                  <h4>Fee</h4>
                                  <h4>Delivery date</h4>
                                  <h4>Recipient gets</h4>
                              </div>
                              <div className="col-2">
                                  <h4>0.86022</h4>
                                  <h4>£2.50</h4>
                                  <h4>25th of November</h4>
                                  <h4 className="black">£1,717.94</h4>
                              </div>
                          </div>
                          <div className="exchange-details last-box whitebg">
                                <h5>You save £66.19 compared to your bank!</h5>
                          </div>

                      </div>
                  </div>
              </div>
          </body>
      </div>
    );
  }
}

export default App;
