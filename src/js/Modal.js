import React, {Component} from 'react';
import phone from '../resources/images/phone1.png';
import redo from '../resources/images/redo.png';
import lock from '../resources/images/lock.png';
import VerificationBox from "./VerificationBox";

class Modal extends Component{

    render(){
        let modal=["modal"];
        if(this.props.showModal) modal += " modal-active";
        return (
            <div className={modal}>
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="modal-top-title">
                            <img src={lock} className="title-lock" alt=""/>
                            <h3>Identity verification required</h3>
                        </div>
                        <h5 className="modal-top-info">
                            For your security, we occasionaly require you to verify your identity
                            by entering a code sent to your mobile device.
                        </h5>
                    </div>
                    <div className="modal-body">
                        <div className="modal-body-content">
                            <div className="enter-code-info">
                                <h4>Enter the code sent via SMS to</h4>
                                <div className="phone-no">
                                    <div className="phone-no-prefix">
                                        <h4>+{this.props.prefix}</h4>
                                    </div>
                                    <div className="phone-no-main">
                                        <h4>{this.props.phoneNumber}</h4>
                                    </div>
                                </div>
                            </div>
                            <VerificationBox/>
                            <div className="receive">
                                <div className="receive-new">
                                    <img src={redo} className="receive-icon" alt=""/>
                                    &nbsp;
                                    <h5>Receive a new code</h5>
                                </div>
                                <div className="receive-call">
                                    <img src={phone} className="receive-icon" alt=""/>
                                    &nbsp;
                                    <h5>Receive code via call instead</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="footer-btn verify-btn">Verify Identity</button>
                        <button onClick={this.props.onClick} className="footer-btn close-btn">Back</button>
                        <div className="footer-text">
                            <h6>I can't access this mobile device</h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;