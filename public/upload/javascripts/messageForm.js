
var MessageForm = React.createClass({

  getInitialState() {
      return {text: ''};
  },

  handleSubmit(e) {
      e.preventDefault();
      var message = {
          user : this.props.user,
          text : this.state.text
      }
      this.props.onMessageSubmit(message); 
      this.setState({ text: '' });
  },

  changeHandler(e) {
      this.setState({ text : e.target.value });
  },

  render() {
      return(
          <div className='message_form'>
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