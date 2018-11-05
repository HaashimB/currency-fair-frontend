import React, { Component } from 'react';
import CFLogo from './CF_logo_RGB_NEG.svg';
import './App.css';

class App extends Component {


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
                              <h1>€1,717.94</h1>
                          </div>
                      </div>
                  </div>
                  <div className="home-panel">
                  </div>
              </div>
          </body>
      </div>
    );
  }
}

export default App;
