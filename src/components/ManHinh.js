import React, { Component } from 'react';

class ManHinh extends Component {
    render() {
        return  <div className="screen__container">
                    <input type="text" name="display" id="screen" value={this.props.result} disabled /><br/>
                </div>
    }
}
export default ManHinh;