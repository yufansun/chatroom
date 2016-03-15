import StatusTrue from './statusTrue.js';
import StatusFalse from './statusFalse.js';
import Background_Contacts from './backgroundContacts.js';
import Badge from 'badge.js';

var Contact = React.createClass({
  render: function() {
    if (this.props.Status=="true"){
    return (      
      <div className="contact">
        <span style={StatusTrue}>
        O  
        </span>
        <span className="contactName">
          {this.props.Name}
        </span>
        <b style={Badge}> </b>
      </div>
      
    );} else{
      return(
      <div className="contact">
      <span style={StatusFalse}>
       O 
        </span>
        <span className="contactName">
          {this.props.Name}
        </span>
      </div>
        );}
  }
});
export default Contact;