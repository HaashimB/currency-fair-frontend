import React from 'react';
import GBP from './uk.png';
import EUR from './euro.png';
import './App.css';

function HomeLeft(props){
    return(
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
                    <div className="transaction-box-text">
                        <h2>You send</h2>
                        <h1>€2,000.00</h1>
                    </div>
                    <div className="currency-box">
                        <img src={EUR} className="currency-img" alt=""/>
                        <h4>EUR</h4>
                    </div>
                </div>
                <div className="transaction-box">
                    <div className="transaction-box-text">
                        <h2>Receiver Gets</h2>
                        <h1>£1,717.94</h1>
                    </div>
                    <div className="currency-box">
                        <img src={GBP} className="currency-img" alt=""/>
                        <h4>GBP</h4>
                    </div>
                </div>
                <button onClick={props.onClick} className="next-btn">
                    <h3>Next</h3>
                </button>
                <div className="footer">
                    <div className="footer-start">
                        <h6>&copy;2016 CurrencyFair</h6>
                    </div>
                    <h6>Help & Support</h6>
                    <h6 className="footer-legal">Legal Stuff</h6>
                </div>
            </div>
        </div>
    );
}

export default HomeLeft;