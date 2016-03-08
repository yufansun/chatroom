
var InputBox = React.createClass({
  render: function(){
    return (
      <form className="inputBox">
      <input type="text" placeholder="Say something..." />
      <input type="submit" value="Send" />
      </form>
      );
  }
});