import React from 'react';
var MessageForm = React.createClass({

  getInitialState() {
      return {text: ''};
  },

  handleSubmit(e) {
      e.preventDefault();
      var message = {
          receiverId : this.props.me,
          content : this.state.text
      }
      this.props.onMessageSubmit(message); 
      this.setState({ text: '' });
  },

  changeHandler(e) {
      this.setState({ text: e.target.value });
  },

  render() {
      return(
          <div className='messageForm'>
              <h4>Write New Message</h4>
              <form onSubmit={this.handleSubmit}>
                  <input
                      placeholder="Say something..." 
                      onChange={this.changeHandler}
                      value={this.state.text}
                  />
                  <input type="submit" value="Send" />
              </form>

          </div>
      );
  }
});
export default MessageForm;