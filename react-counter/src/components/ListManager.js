var React = require('react');

var Counter = React.createClass({
  getInitialState: function() {
    return{
      count: 0
    }
  },
  onClick: function() {
    this.setState({
      count: this.state.count + 1
    });
  },
  render: function() {
    return(
      <div className="sdf">
        {this.props.title}<br/>
        count is: {this.state.count}<br/>
        <button onClick={this.onClick}>Click Me</button>
      </div>
    )

  }
});

module.exports = Counter;
