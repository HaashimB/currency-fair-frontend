import React from 'react';
import question from './question.png';
import './App.css';

function HomeRight(){
    return(
        <div className="home-right">
            <div className="home-panel">
                <div className="exchange-details black">
                    <h4>Sending Details</h4>
                </div>
                <div className="exchange-details whitebg">
                    <h4>You Send</h4>
                    <h4 className="col-2 black">€2,000.00</h4>
                </div>
                <div className="exchange-details black">
                    <h4>Receiving Details</h4>
                    <h5 className="col-2 blue"> As of right now</h5>
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
    )
}

export default HomeRight;