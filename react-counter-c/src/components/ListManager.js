var React = require('react');
var TimerExample = React.createClass({
  getInitialState:function() {
    return{ elapsed : 0 };
  }
  render: function () {
    return(
      <div>Counter statrs</div>
      <div className="count"></div>
    )

  }
});

module.exports = TimerExample;
