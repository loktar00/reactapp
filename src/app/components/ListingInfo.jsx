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
                <li>{this.props.address}</li>
                <li>{this.props.price}</li>
                <li>{this.props.bedrooms}</li>
                <li>{this.props.bathrooms}</li>
                <li>{this.props.squareFoot}</li>
            </ul>
        );
    }
});

module.exports = ListingInfo;