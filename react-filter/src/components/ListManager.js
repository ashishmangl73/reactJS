var React = require('react');
var List = require('./List.js');
var Counter = React.createClass({
  filterList: function(event) {
    var updatedList = this.state.initialItems;
     updatedList = updatedList.filter(function(item){
       return item.toLowerCase().search(
         event.target.value.toLowerCase()) !== -1;
     });
     this.setState({items: updatedList});
  },
getInitialState: function() {
  return{initialItems:[
    "Apple",
    'orange',
    'Fruit Name'
  ],
items:[]}
},

componentWillMount: function(){
   this.setState({items: this.state.initialItems})
 },

  render: function() {
    return(
      <div className="sdf">
      <h1>{this.props.title}</h1>
        <form>
          <input placeholder="search item" onChange={this.filterList}/>
        </form>
        <List items={this.state.items} />
        <h2>
          List whiout filter


        </h2>
        <List items={this.state.initialItems} />
      </div>
    )

  }
});

module.exports = Counter;
