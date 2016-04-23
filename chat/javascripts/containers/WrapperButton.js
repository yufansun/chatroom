import Wrapper from './Wrapper.js';
import React from 'react';

var flag = false;

class WrapperButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    flag = !flag;
    this.setState({
      showComponent: flag,
    });
  }

  render() {
    return (
      <div>
        <div id = "divContainer" onClick={this._onButtonClick}>Start Chatting!</div>
        {this.state.showComponent ?
           <Wrapper /> :
           null
        }
      </div>
    );
  }
}
export default WrapperButton;