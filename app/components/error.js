/*
Error message
 */

var React = require('react');

var Error = React.createClass({
    propTypes: {
        children: React.PropTypes.node,
        requestClose: React.PropTypes.func
    },

    onClose: function(event) {
        event.preventDefault();

        this.props.requestClose();
    },

    render: function() {
        return (
            <div className="error">
                {this.props.children}
                <div className="error--close" >
                <a href="#" onClick={this.onClose}>Got it!</a>
                </div>
            </div>
        );
    }
});

module.exports = Error;
