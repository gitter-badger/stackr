
/* global init:true */

var React = require('react'),
    Stackr = require('./components/Stackr');

React.renderComponent(
  <Stackr data={init} />,
  document.getElementById('content')
);
