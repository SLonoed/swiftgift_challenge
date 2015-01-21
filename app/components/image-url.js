/*
Image url in list.
 */

var React = require('react');

var ImageUrl = React.createClass({
    propTypes: {
        url: React.PropTypes.string.isRequired
    },

    render: function() {
        return (
            <li className="image-url">
                {this.props.url}
            </li>
        );
    }
});

module.exports = ImageUrl;
