import React from 'react';
import TransactionBox from "./TransactionBox";

function Transaction(props){
    return(
        <div className="transaction">
            <h2>Let's set up your transaction!</h2>
            <h3 className="grey">Specify the amount to be sent or received.</h3>
            <TransactionBox
                sendAmount={props.sendAmount}
                receiveAmount={props.receiveAmount}
            />
        </div>
    );

}

export default Transaction;