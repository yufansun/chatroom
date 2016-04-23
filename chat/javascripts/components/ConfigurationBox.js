import React from 'react';
var ConfigurationBox = React.createClass({

  getInitialState() {
      return {text: ''};
  },

  handleSubmit(e) {
      e.preventDefault();
      var my_id = {
          text : this.state.text
      }

      console.log("in Configuration Box")
      console.log(my_id.text)

      this.props.set_my_id(my_id.text); 
      this.setState({ text: '' });
  },

  changeHandler(e) {
      this.setState({ text : e.target.value });
  },

  render() {
      return(
          <div className='message_form'>
              <h4>What is your ID?</h4>
              <form onSubmit={this.handleSubmit}>
                  <input
                      placeholder="Your id here..." 
                      onChange={this.changeHandler}
                      value={this.state.text}
                  />
                  <input type="submit" value="Send" />
              </form>
          </div>
      );
  }
});
export default ConfigurationBox;