/** @jsx React.DOM */
var React = require('react');

var ListingThumb = React.createClass({
    displayName: 'ListingThumb',
    getDefaultProps: function(){
        return {
            src: 'http://omahahomehunt.com/homes/21501613/thumbs/image-21501613-1.jpg'
        }
    },
    render: function () {
        return (
            <img src={'http://omahahomehunt.com/' + this.props.src}/>
        );
    }
});

module.exports = ListingThumb;