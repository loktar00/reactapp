/** @jsx React.DOM */
var React = require('react');

var ListingInfo = React.createClass({
    displayName: 'ListingInfo',
    getDefaultProps : function(){
        return {
            address: '',
            price : '',
            bedrooms : 0,
            bathrooms : 0,
            squareFoot : 0
        }
    },
    render: function () {
        return (
            <ul>
                <li>Address : {this.props.address}</li>
                <li>Price : {this.props.price}</li>
                <li>Beds : {this.props.bedrooms}</li>
                <li>Baths : {this.props.bathrooms}</li>
                <li>Squarefoot : {this.props.squareFoot}</li>
            </ul>
        );
    }
});

module.exports = ListingInfo;