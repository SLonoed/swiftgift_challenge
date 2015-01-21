/*
Represent simple button
 */

var React = require('react');

var Button = React.createClass({
    propTypes: {
        children: React.PropTypes.node
    },

    render: function() {
        var classes = React.addons.classSet({
            btn: true,
            'btn--navy': this.props.cStyle === 'navy'
        });

        return (
            <button {...this.props} className={classes}>
                {this.props.children}
            </button>
        );
    }
});

module.exports = Button;
