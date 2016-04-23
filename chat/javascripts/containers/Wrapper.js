import RecentContactList from '../components/RecentContactList.js';
import MessageBox from '../components/MessageBox.js';
import ConfigurationBox from '../components/ConfigurationBox.js'
import React from 'react';
const EVENT_NAMES = require('../../../../constants/eventConstants.js');

var socket = io();

var my_id = "56edbc6bfa310cd714c40f1c";

var contact_to_send = "";
var ifMessageBox = false;
var Wrapper = React.createClass({

  getInitialState: function() {
    return {contactState: [] , // {userId:userId, contactName: name, contactStatus:status}
            messageState: [],
            chatWith: false} //{user: user, text: text}
    //This means I set the initial state of contactState to the prop data
  },

  loggedin: function(my_id_in) {
    my_id = my_id_in;
    socket.emit(EVENT_NAMES.CREATE_NEW_USER, my_id); // to tell the backend that I am online

    var _this = this;

    socket.on(EVENT_NAMES.SEND_RECENT_CONTACTS, function(contactStatus) {
      _this.setState({contactState: contactStatus});
    })

    socket.on(EVENT_NAMES.UPDATE_STATUS, function(contactStatus) {
      var oldState = _this.state.contactState;
      for(var i=0; i<oldState.length; ++i) {
        if (oldState[i].userId == contactStatus.userId) {
          oldState[i].contactStatus = contactStatus.contactStatus;
          break;
        }
      }
      _this.setState({contactState: oldState});
    });

    socket.on(EVENT_NAMES.FORWARD_MESSAGE, function(message) {
      console.log("got an message")
      console.log(message)
      var oldState = _this.state.messageState;
      console.log(oldState)
      oldState.push(message);
      _this.setState({oldState});
    })
  },

  send_contact_id: function(contact_id) {
    //document.getElementById("messageBox").style.display = "block";
    ifMessageBox = true;
    this.setState({
      //console.log(contact_id);
      chatWith: contact_id,
    });
    contact_to_send = contact_id;
  },
  
  send_message: function(message) {
    socket.emit(EVENT_NAMES.MESSAGE, {content: message.content, receiverId: contact_to_send});
  },
 

  render: function() {
    return(
      <div className="wrapper">
        <h1>StuffPass</h1>
          <RecentContactList data = {this.state.contactState} send_contact_id = {this.send_contact_id} />

          <ConfigurationBox set_my_id = {this.loggedin} />

          {ifMessageBox ?
            <div id = "divContainer" className='messageBox'>
              <MessageBox messages = {this.state.messageState}
              send_message = {this.send_message}
              me = {my_id}
            /> 
            </div>:
           null
        }
      </div>
    );
  }



});

export default Wrapper;