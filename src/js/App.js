import React, { Component } from 'react';
import CFLogo from '../resources/CF_logo_RGB_NEG.svg';
import '../css/App.css';
import Modal from './Modal';
import HomeLeft from "./HomeLeft";
import HomeRight from "./HomeRight";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            sendAmount: 2000,
            rate: 0.86022,
            fee: 2.50,
            deliveryDate: "25th of November",
            bankSavings: 66.19,
            prefix: 353,
            phoneNumber: 872251177
        };
        this.handleClick = this.handleClick.bind(this);
        this.getReceiveAmount = this.getReceiveAmount.bind(this);
    }

    getReceiveAmount(){
        const { sendAmount, rate, fee } = this.state;
        return (sendAmount * rate) - fee;
    }

    handleClick(){
        this.setState({showModal: !this.state.showModal});
        console.log("Clicked");
    }

    render() {
        const { sendAmount, rate, fee, deliveryDate, bankSavings, prefix, phoneNumber } = this.state;
        const receiveAmount = this.getReceiveAmount();
        return (
            <div className="home">
                <header className="home-header">
                    <img src={CFLogo}/>
                </header>
                <div className="home-main">
                    {this.state.showModal && <Modal
                        onClick={this.handleClick}
                        prefix={prefix}
                        phoneNumber={phoneNumber}
                    />
                    }
                    <HomeLeft
                        onClick={this.handleClick}
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
