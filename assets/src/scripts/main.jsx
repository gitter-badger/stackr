
/* global init:true */

var React = require('react'),
    Stackr = React.createFactory(require('./components/Stackr'));

React.render(
  <Stackr data={init} />,
  document.getElementById('content')
);
