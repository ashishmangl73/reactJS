var React = require('react');
var List = require('./List.js');
var ListManager = React.createClass({
  getInitialState : function() {
    return{items:[], newTextItem:''};
  },
  handleSubmit : function(e) {
    e.preventDefault();

    var currentItem = this.state.items;

    currentItem.push(this.state.newTextItem);
    this.setState({items: currentItem, newTextItem:''})
  },
  onChange: function(e) {
    this.setState({newTextItem: e.target.value});
  },
 render: function() {
   return (

     <div>
      <h3>{this.props.title}</h3>
      <form onSubmit={this.handleSubmit}>
        <input  value={this.state.newTextItem} onChange={this.onChange}/>
        <button>Add</button>

      </form>
      <List items={this.state.items}/>
     </div>
   )
 }
});

module.exports = ListManager;
