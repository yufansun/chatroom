var Contact = React.createClass({
  render: function() {
    if (this.props.Status=="true"){
    return (      
      <div style={Background_Contacts} className="contact">
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
      <div style={Background_Contacts} className="contact">
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