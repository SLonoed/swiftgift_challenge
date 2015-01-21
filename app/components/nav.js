/*
Navigation panel with links.
 */

var React = require('react');

var NavLink = require('./nav-link'),
    Fa = require('./fa'),
    links = require('../common/links');

var Nav = React.createClass({
    render: function() {
        return (
            <nav className="nav">
                <div className="nav--header">
                   <Fa icon="thumbs-o-up" />
                   &nbsp;
                   Code challenge
                   &nbsp;
                   <Fa icon="thumbs-o-up" flip="horizontal" />
                </div>
                <ul className="nav--list">
                    {links.map(function(link, i) {
                        return (
                            <NavLink {...link} key={i} />
                        );
                    })}
                </ul>
            </nav>
        );
    }
});

module.exports = Nav;
