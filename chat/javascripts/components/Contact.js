import React from 'react';

var Contact = React.createClass({
    render: function() {
        //console.log("in contact.js!");
        //console.log(this.props)
        if (this.props.contactStatus === "online"){
            return (
                <div className="contact">
                    <span className = "StatusTrue"> 0 </span>
                    <span className="contactName" onClick={(event) => {
                        event.stopPropagation();
                        this.props.send_contact_id(this.props.userId)
                    }}>
                        {this.props.contactName}
                    </span>    
                </div>
        );} else {
            return(
                 <div className="contact">
                     <span className = "StatusFalse"> 0 </span>
                   <span className="contactName" onClick={(event) => {
                       event.stopPropagation();
                       this.props.send_contact_id(this.props.userId);
                   }}>
                        {this.props.contactName}
                    </span>    
                 </div>
        );}
    } // render
}); // Contact

export default Contact;


// function (e) { console.log(1); return 1;} <=> (e) => {}
