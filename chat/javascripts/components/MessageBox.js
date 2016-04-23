import React from 'react';
import MessageList from './MessageList.js';
import MessageForm from './MessageForm.js';
var MessageBox = React.createClass({

  handleMessageSubmit(message) {
      var {messages} = this.props;
      messages.push(message);
      this.setState({messages});
      this.props.send_message(message);
  },


  render() {
      return (
          <div className='messageBox'>
              <MessageList
                  messages={this.props.messages}
              />
              <MessageForm
                  onMessageSubmit={this.handleMessageSubmit}
                  me={this.props.me}
              />
          </div>
      );
  }
});
export default MessageBox;