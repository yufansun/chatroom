import ContactList from './contactList.js';
import Background_ContactBox from 'backgroundContactBox.js';

var ContactBox = React.createClass({
  getInitialState: function() {
    return {dataState: [{ key:0, Name:"No one", Statue: "false"}] }
        
  },
   componentDidMount: function () {
  var socket=io();
  socket.emit('myID',"Yufan");

    var _this=this;
    socket.on('initialStatus',function(initialStatus){
      console.log("Initial State");
      _this.setState({dataState:initialStatus});
    })
  },
  render: function() {
    return (
      <div style={Background_ContactBox} className="contactBox">
        <h2>Recent Contacts</h2>
        <ContactList data={this.state.dataState} />
      </div>
    );
  }
});
export default ContactBox;