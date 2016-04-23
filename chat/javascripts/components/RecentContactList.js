import Contact from './Contact.js';
import React from 'react';

var RecentContactList = React.createClass({
	send_contact: function(contact_id) {
		this.props.send_contact_id(contact_id);
	},

	render: function() {
		var _this = this;
		var ContactNodes = this.props.data.map(function(contact) {
			return (
			  <Contact 
			  	contactName = {contact.contactName}
			  	contactStatus = {contact.contactStatus}
			  	userId = {contact.userId}
			  	key = {contact.userId}
			  	send_contact_id = {_this.props.send_contact_id}
			  />
			);
		});
		return (
			<div className="contactList">
				<h2>Contact List</h2>
			  {ContactNodes}
			</div>
		);
	} // render
}); // RecentContactList

export default RecentContactList;