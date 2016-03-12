var InputBox = React.createClass({
  getInitialState: function(){
    return {sender: '', msg: ''};
  },
  handleMsgChange: function(e){
    this.setState({msg: e.target.value});
  },
  handleSubmit: function(e){
    //may have error because I didn't implement this function
    e.preventDefault();
    var msg = this.state.msg.trim();
    if(!msg){
      return;
    }
    socket.emit("chat message", msg);
    console.log("chat message: "+msg+" sent!");
    this.setState({msg:''});
  },
  render: function(){
    return (
      <form className="inputBox" onSubmit={this.handleSubmit}>
      <input 
      type="text" 
      placeholder="Say something..." 
      //may have some bugs with state
      value={this.state.msg}
      onChange={this.handleMsgChange}/>
      <input type="submit" value="Send" />
      </form>
      );
  }
});

export default InputBox;
