import React from 'react';
import Message from './Message.js';
var MessageList = React.createClass({
  render: function() {
    var _this = this;
    var i = 0;
    var MessageNodes = this.props.messages.map(function(message){
      i ++;
      return (
        <Message
          user={message.receiverId}
          text={message.content}
          key = {i}
        />
      );
    });

    return (
      <div className = "messageList">
        {MessageNodes}
      </div>
    );
  }
});
export default MessageList;