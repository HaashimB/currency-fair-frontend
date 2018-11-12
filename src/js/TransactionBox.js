import React from 'react';
import EUR from "../resources/images/euro.png";
import GBP from "../resources/images/uk.png";

function TransactionBox(props){
    return(
        <div>
            <div className="transaction-box box-1">
                <div className="transaction-box-text">
                    <h3>YOU SEND</h3>
                    <h1>€ {props.sendAmount}.00</h1>
                </div>
                <div className="currency-box">
                    <img src={EUR} className="currency-img" alt=""/>
                    <h4>EUR</h4>
                </div>
            </div>
            <div className="transaction-box">
                <div className="transaction-box-text">
                    <h3>RECEIVER GETS</h3>
                    <h1>£ {props.receiveAmount}</h1>
                </div>
                <div className="currency-box">
                    <img src={GBP} className="currency-img" alt=""/>
                    <h4>GBP</h4>
                </div>
            </div>
        </div>
    );
}

export default TransactionBox;