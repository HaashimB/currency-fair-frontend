import React from 'react';
import question from '../resources/images/question.png';

function HomeRight(props){
    return(
        <div className="home-right">
            <div className="home-panel">
                <div className="exchange-details black">
                    <h4>Sending Details</h4>
                </div>
                <div className="exchange-details whitebg">
                    <h4>You send</h4>
                    <h4 className="col-2 black center">€{props.sendAmount.toFixed(2)}</h4>
                </div>
                <div className="exchange-details black">
                    <h4>Receiving Details</h4>
                    <h5 className="col-2 blue center"> As of right now</h5>
                    <img src={question} className="question-image" alt="" />
                </div>
                <div className="exchange-details-large whitebg">
                    <div  className="col-1">
                        <h4>Rate</h4>
                        <h4>Fee</h4>
                        <h4>Delivery date</h4>
                        <h4>Recipient gets</h4>
                    </div>
                    <div className="col-2">
                        <h4>{props.rate}</h4>
                        <h4>£{props.fee.toFixed(2)}</h4>
                        <h4>{props.deliveryDate}</h4>
                        <h4 className="black">£{props.receiveAmount}</h4>
                    </div>
                </div>
                <div className="exchange-details last-box whitebg">
                    <h5>You save £{props.bankSavings} compared to your bank!</h5>
                </div>
            </div>
        </div>
    )
}

export default HomeRight;