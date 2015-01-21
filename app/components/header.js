/*
Header. Contain for for adding image.
 */

var React = require('react'),
    imagesStore = require('../common/images-store');

var Fa = require('./fa'),
    Error = require('./error'),
    Button = require('./button');

var Header = React.createClass({
    propTypes: {
        toggleMenu: React.PropTypes.func.isRequired
    },

    getInitialState: function() {
        return {
            error: null,
            isMoved: false
        };
    },

    clearError: function() {
        this.setState({ error: null });
    },

    showError: function() {
        this.setState({
            error: 'Enter valid image url (only PNG and JPEG supported)'
        });
    },

    isImageUrl: function(url) {
        return /\.(jpeg|jpg|png)$/gi.test(url);
    },

    onAddUrl: function(event) {
        var input = this.refs.input.getDOMNode(),
            url = input.value.trim();

        event.preventDefault();

        if (this.isImageUrl(url)) {
            document.activeElement.blur();
            imagesStore.addImage(url);
            input.value = '';
        } else {
            this.showError();
        }

    },

    render: function() {
        return (
            <div className="header" >
                <form className="header--form" onSubmit={this.onAddUrl}>
                    <Button type="button" cStyle="navy" onClick={this.props.toggleMenu}>
                        <Fa icon="bars" size="lg" />
                    </Button>
                    <input ref="input" className="header--input" type="text" placeholder="Enter image url"/>
                    <Button type="submit">
                        <Fa icon="plus" />
                    </Button>
                </form>
                <div className={this.state.error ? 'header--show-err' : 'header--hide-err'} >
                    <Error requestClose={this.clearError} >{this.state.error}</Error>
                </div>
            </div>
        );
    }
});

module.exports = Header;
