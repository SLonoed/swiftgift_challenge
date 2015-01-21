/*
Link in nav panel. Render title and icon.
 */

var React = require('react');

var Fa = require('./fa');

var NavLink = React.createClass({
    propTypes: {
        icon: React.PropTypes.string,
        url: React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired
    },

    render: function() {
        var props = this.props,
            title = props.title,
            icon = props.icon || title.toLowerCase();

        return (
            <li>
                <a className="nav-link" href={props.url} target="_blank">
                        <span className="nav-link--icon">
                            <Fa icon={icon} size="lg" fw={true}/>
                        </span>
                        {title}
                </a>
            </li>
        );
    }
});

module.exports = NavLink;
