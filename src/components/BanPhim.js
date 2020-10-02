import React, {Component} from 'react';

class BanPhim extends Component {
    render() {
        return  <div classNameName="button__container">
                    <div className="row__container">
                        <button id="divide" value="/" onClick={e => this.props.onClick(e.target.value)}>&#247;</button>
                        <button id="7" value="7" onClick={e => this.props.onClick(e.target.value)}>7</button>
                        <button id="8"  value="8" onClick={e => this.props.onClick(e.target.value)}>8</button>
                        <button id="9"  value="9" onClick={e => this.props.onClick(e.target.value)}>9</button>
                        <button id="multiply"  value="*" onClick={e => this.props.onClick(e.target.value)}>&#215;</button>
                    </div>
                    <div className="row__container">
                        <button id="percent"  value="%" onClick={e => this.props.onClick(e.target.value)}>&#37;</button>
                        <button id="4"  value="4" onClick={e => this.props.onClick(e.target.value)}>4</button>
                        <button id="5"  value="5" onClick={e => this.props.onClick(e.target.value)}>5</button>
                        <button id="6"  value="6" onClick={e => this.props.onClick(e.target.value)}>6</button>
                        <button id="sub"  value="-" onClick={e => this.props.onClick(e.target.value)}>&#8722;</button>
                    </div>
                    <div className="row__container2">
                        <div className="row__container--col1">
                            <button id="clear"  value="c" onClick={e => this.props.onClick(e.target.value)}>C</button>
                            <button id="1"  value="1" onClick={e => this.props.onClick(e.target.value)}>1</button>
                            <button id="1"  value="2" onClick={e => this.props.onClick(e.target.value)}>2</button>
                            <button id="1"  value="3" onClick={e => this.props.onClick(e.target.value)}>3</button>
                            <button id="clear--all"  value="ac" onClick={e => this.props.onClick(e.target.value)}>AC</button>
                            <button id="zero"  value="0" onClick={e => this.props.onClick(e.target.value)}>0</button>
                            <button id="dot"  value="." onClick={e => this.props.onClick(e.target.value)}>.</button>
                            <button id="result"  value="=" onClick={e => this.props.onClick(e.target.value)}>&#61;</button>
                        </div>
                        <div className="row__container--col2">
                            <button id="plus"  value="+" onClick={e => this.props.onClick(e.target.value)}>&#43;</button>
                        </div>
                    </div>
                </div>
    }
}
export default BanPhim;