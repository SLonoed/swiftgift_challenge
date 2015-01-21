/*
Gallery class. Use Swipe library.
 */

var React = require('react'),
    Swipe = require('../common/swipe');

var Fa = require('./fa');

var Gallery = React.createClass({
    getInitialState: function() {
        return {
            enabled: false
        };
    },

    open: function() {
        this.setState({
            enabled: true
        });
    },

    close: function() {
        this.setState({
            enabled: false
        });
    },

    componentDidMount: function() {
        this.swipe = Swipe(this.refs.swipe.getDOMNode(), this.props)
    },

    componentWillUnmount: function() {
        this.swipe.kill();

        delete this.swipe;
    },

    componentDidUpdate: function() {
        this.swipe.setup();
        this.swipe.slide(0);
    },

    onImageTouchStart: function(e) {
        e.preventDefault();
    },

    render: function() {
        var className = React.addons.classSet({
            gallery: true,
            'gallery--enabled': this.state.enabled
        });


        return (
            <div className={className}>
                <div ref="swipe" className="gallery--wrap swipe ">
                    <div className='gallery--wrap swipe-wrap'>
                        {this.props.images.map(function(src) {
                            var style = {
                              backgroundImage: 'url(' + src + ')'
                            };

                            return (
                                <div
                                    style={style}
                                    className="gallery--img"
                                    onClick={this.onImageTouchStart} >
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="gallery--close" onClick={this.close} >
                    <Fa icon="close" size="2x" />
                </div>
            </div>
        );
    }
});

module.exports = Gallery;
