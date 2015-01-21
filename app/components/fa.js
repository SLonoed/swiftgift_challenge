/*
Font-awesome icon wrapper
 */

var React = require('react');

var Fa = React.createClass({
    propTypes: {
        icon: React.PropTypes.string.isRequired,
        flip: React.PropTypes.string,
        size: React.PropTypes.oneOf(['lg', '2x', '3x', '4x', '5x'])
    },

    render: function() {
        var props = this.props,
            cls = {
                fa: true,
                'fa-fw': props.fw
            };

        cls['fa-' + props.icon] = true;

        if (props.size) cls['fa-' + props.size] = true;
        if (props.flip) cls['fa-flip-' + props.flip] = true;

        return (
            <i className={React.addons.classSet(cls)}></i>
        );
    }
});

module.exports = Fa;
