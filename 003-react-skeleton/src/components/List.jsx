var React = require('react');
// Importing a jsx file is different from importing a npm module file
var ListItem = require('./ListItem.jsx');

var ingredients = [{"id":1, "text":"ham"}, {"id":2, "text":"cheese"}, {"id":3, "text":"potatoes"}];

var List = React.createClass({
  render: function() {
    var listItems = ingredients.map(function(item) {
      return <ListItem key={item.id} ingredient={item.text} />;
    });
    return (<ul>{listItems}</ul>);
  }
});

module.exports = List;
