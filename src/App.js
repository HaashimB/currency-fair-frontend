import React, { Component } from 'react';
import CFLogo from './CF_logo_RGB_NEG.svg';
import './App.css';
import Modal from './Modal';
import HomeLeft from "./HomeLeft";
import HomeRight from "./HomeRight";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
          showModal: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({showModal: !this.state.showModal});
        console.log("Clicked");
    }

    render() {
        return (
            <div className="home">
                <header className="home-header">
                    <img src={CFLogo}/>
                </header>
                <div className="home-main">
                    {this.state.showModal && <Modal onClick={this.handleClick} /> }
                    <HomeLeft onClick={this.handleClick}/>
                    <HomeRight />
                </div>
            </div>
        );
    }
}

export default App;
