import React from 'react';

function Tabs(){
    return(
        <div className="tab">
            <div className="tab-links link-active">
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
    );
}

export default Tabs;