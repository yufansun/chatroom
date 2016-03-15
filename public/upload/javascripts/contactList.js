import Contact from './contact.js';

var ContactList = React.createClass({
  // getInitialState: function() {
  //   return {data: data};
  // },
  render: function() {
        var contactNodes = this.props.data.map(function(contact) {
      return (
        <Contact Name={contact.Name} key={contact.id} Status={contact.Status}>
          {contact.Status}
        </Contact>
      );
    });
    return (
      <div className="contactList">
        {contactNodes}
      </div>
    );
  }
});

export default ContactList;