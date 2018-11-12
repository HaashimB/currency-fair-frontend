import React from 'react';
import Tabs from "./Tabs";
import Transaction from "./Transaction";

function HomeLeft(props){
    return(
        <div className="home-left">
            <Tabs />
            <Transaction
                onClick={props.onClick}
                sendAmount={props.sendAmount}
                receiveAmount={props.receiveAmount}
            />
            <button onClick={props.onClick} className="next-btn">
                <h3>Next</h3>
            </button>
            <div className="footer">
                <div className="footer-start">
                    <h5>&copy;2016 CurrencyFair</h5>
                </div>
                <h5>Help & Support</h5>
                <h5 className="footer-legal">Legal Stuff</h5>
            </div>
        </div>
    );
}

export default HomeLeft;