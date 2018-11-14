import React, { Component } from 'react';
import CFLogo from '../resources/images/CF_logo_RGB_NEG.svg';
import '../css/App.css';
import '../css/HomeLeft.css'
import '../css/HomeRight.css'
import '../css/Modal.css';
import '../css/Tabs.css';
import '../css/Transaction.css'
import '../css/TransactionBox.css'
import Modal from './Modal';
import HomeLeft from "./HomeLeft";
import HomeRight from "./HomeRight";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false, //state to display the Modal
            sendAmount: 2000,
            rate: 0.86022,
            fee: 2.50,
            deliveryDate: "25th of November",
            bankSavings: 66.19,
            prefix: 353,
            phoneNumber: 872251177
        };
        this.onClick = this.onClick.bind(this);
        this.getReceiveAmount = this.getReceiveAmount.bind(this);
    }

    getReceiveAmount(){
        const { sendAmount, rate, fee } = this.state;
        return (sendAmount * rate) - fee;
    }

    onClick(){
        this.setState({showModal: !this.state.showModal});
    }

    render() {
        const { showModal, sendAmount, rate, fee, deliveryDate, bankSavings, prefix, phoneNumber } = this.state;
        const receiveAmount = this.getReceiveAmount();
        return (
            <div className="home">
                <header className="home-header">
                    <img src={CFLogo} className="logo" alt=""/>
                </header>
                <div className="home-main">
                    <Modal
                        onClick={this.onClick}
                        showModal={showModal}
                        prefix={prefix}
                        phoneNumber={phoneNumber}
                    />
                    <HomeLeft
                        onClick={this.onClick}
                        sendAmount={sendAmount}
                        receiveAmount={receiveAmount}/>
                    <HomeRight
                        sendAmount={sendAmount}
                        rate={rate}
                        fee={fee}
                        receiveAmount={receiveAmount}
                        deliveryDate={deliveryDate}
                        bankSavings={bankSavings}
                    />
                </div>
            </div>
        );
    }
}

export default App;
