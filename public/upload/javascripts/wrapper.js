import ContactBox from './contactBox.js';
import InputBox from 'inputBox.js';

var Wrapper = React.createClass({

  render: function(){
    return(
      <div className="wrapper">
      <h1>StuffPass</h1>
      <ContactBox/>
      <h2>Chatting Part</h2>
      <InputBox />
      </div>
      );
  }
});
export default Wrapper;