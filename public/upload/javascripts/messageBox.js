import MessageList from './messageList.js';
import MessageForm from './messageForm.js';
var MessageBox = React.createClass({

  getInitialState() {
      return {users: [], messages:[], text: ''};
  },

  componentDidMount() {
      socket.on('init', this._initialize);
      socket.on('chat message', this._messageRecieve);
  },

  _initialize(data) {
      var {users, name} = data;
      this.setState({users, user: name});
  },

  _messageRecieve(message) {
      var {messages} = this.state;
      messages.push(message);
      this.setState({messages});
  },



  handleMessageSubmit(message) {
      var {messages} = this.state;
      messages.push(message);
      this.setState({messages});
      socket.emit('chat message', message);
      console.log("chat message "+message.text+" sent!");
  },


  render() {
      return (
          <div className='messageBox'>
              <MessageList
                  messages={this.state.messages}
              />
              <MessageForm
                  onMessageSubmit={this.handleMessageSubmit}
                  user={this.state.user}
              />
          </div>
      );
  }
});
export default MessageBox;