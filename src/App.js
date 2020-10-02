import React, { Component } from 'react';
import './App.css';
import ManHinh from './components/ManHinh';
import BanPhim from "./components/BanPhim";

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if(button === "="){
            if (!isNaN(this.state.result)) {
                this.setState ({
                    result: Number(this.state.result)
                })
            } else {
            this.calculate()
            }
        }

        else if(button === "ac"){
            this.setState({
                result: "0"
            })
        }
        else if(button === "c"){
            if (this.state.result.split('').every(e=> e!=='.') && Number(this.state.result) === 0) {
                this.setState({
                    result: "0"
                })
            } else {
            this.backspace()
            }
        }
        else if(button === "."){
            if(this.state.result.split('').every(e=> e!=='.')) {
                this.setState({
                    result: this.state.result + button
                })
            }
        }

        else if(button === "%"){
            this.setState({
                result: this.state.result + '*100/'
            })
        }

        else if (!isNaN(button)) {
            if (this.state.result.split('').every(e=> e!=='.') && Number(this.state.result) === 0) {
                this.setState({
                    result: button
                })
            } else {
                this.setState({
                    result: this.state.result + button
                })
            }}
        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
        try {
            this.setState({
                // eslint-disable-next-line
                result: eval(this.state.result) + ''
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
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