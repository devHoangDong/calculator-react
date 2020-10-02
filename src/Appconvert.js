import React, { Component } from 'react';
import './App.css';
import ManHinh from './components/ManHinh';
import BanPhim from "./components/BanPhim";

class App extends Component {
    constructor(){
        super();

        this.state = {
            arrresult: [],
            screen: [],
            result: ""
        }
    }

    onClick = button => {

        if (!isNaN(button)) {
            this.setfunc()
        } else if (button === '.') {
            if (screen.every(e => e !== ".")) {
                screen.push(button);
            }
            this.setfunc()
        } else if(button === "ac") {
            this.reset()
        } else if(button === "=") {
            this.calculate()
        } else if(button === "c") {
            this.backspace()
        } else if(button === "+") {
            this.displaybtn();
            
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };
    displaybtn = () => {
        this.setState({
            result: this.state.result + button
        })
    };

    setfunc = () => {
        this.setState({
            arrresult: this.state.arrresult.push(button),
            result: Number(screen.join(""))
        })
    };

    calculate = () => {
        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(this.state.result) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            arrresult: [],
            screen: [],
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                <div className="calc__title">
                <h2>Máy tính bỏ túi - Hoang Dong <sup>&#169;</sup></h2>
                </div>
                <div className="calc__main">
                        <ManHinh result={this.state.result}/>
                        <BanPhim onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;