/*
List container. Also have header and footer.
 */

var React = require('react');

var Header = require('./header'),
    Error = require('./error'),
    Button = require('./button'),
    ImageUrl = require('./image-url');

var List = React.createClass({
    propTypes: {
        showGallery: React.PropTypes.func.isRequired
    },

    getInitialState: function() {
        return {
            isMoved: false
        };
    },

    toggleNav: function() {
        this.setState({
            isMoved: !this.state.isMoved
        });
    },

    render: function() {
        var classes = React.addons.classSet({
            'list': true,
            'list--moved': this.state.isMoved
        });

        return (
            <div className={classes}>
                <header>
                    <Header toggleMenu={this.toggleNav}/>
                </header>

                <main className="list--content">
                    <ul>
                        {this.props.images.map(function(imageUrl, i) {
                            return (
                                <ImageUrl key={i} url={imageUrl} />
                            );
                        })}
                    </ul>
                </main>
                <footer className="list--footer">
                    <Button type="button" onClick={this.props.showGallery}>
                        Show images
                    </Button>
                </footer>

                <div className="list--overlay" onClick={this.toggleNav} ></div>
            </div>
        );
    }
});

module.exports = List;
