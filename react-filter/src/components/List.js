var React = require('react');
var ListItem = require('./ListItem');
//var ingredients = [{"id":1,"text": "ham"},{"id":2,"text": "lala"}]
var List =  React.createClass({
  render: function() {
    var ListItems = function(text) {
      return<ListItem  key={text} text={text} />
    }
      return(<ul>{this.props.items.map(ListItems)}</ul>);
  }
});
module.exports = List;
