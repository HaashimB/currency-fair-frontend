import React, { Component } from 'react';
import '../css/Modal.css';

class VerificationBox extends Component {
    constructor(props){
        super(props);
        this.box = this.box.bind(this);
    }

    box(){
        let verifyBox = [];
        for(let i = 0; i<6; i++){
            verifyBox.push(
                <input className="verify-box">
                </input>
            )
        }
        return verifyBox;
    }

    render(){
        return(
            <div className="enter-code-verify">
                {this.box()}
            </div>
        );
    }
}

export default VerificationBox;

