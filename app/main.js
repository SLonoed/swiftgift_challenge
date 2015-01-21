/*
Star file, load styles and scripts
 */

require('./app.less');
require('font-awesome-webpack');

var App = require('./components/app');

window.React = require('react');

window.onload = () => React.render(<App />, document.body);
