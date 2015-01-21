/**
 * App class, contain all things
 * @type {exports}
 */

var React = require('react'),
    imagesStore = require('../common/images-store');

var List = require('./list'),
    Gallery = require('./gallery'),
    Nav = require('./nav');

var App = React.createClass({
    componentWillMount: function() {
        imagesStore.onChange(this.forceUpdate.bind(this));
    },

    componentWillUnMount: function() {
        // Place for toggle of innerStore listeners
        // In this app it not necessary,
        // because app never unmount
    },

    getInitialState: function() {
        return {
            images: imagesStore.getImages()
        }
    },

    showGallery: function() {
        this.refs.gallery.open();
    },

    render: function() {
        return (
            <div className="app">
                <Nav />
                <List showGallery={this.showGallery} images={this.state.images} />
                <Gallery ref="gallery" images={this.state.images}/>
            </div>
        );
    }
});

module.exports = App;
