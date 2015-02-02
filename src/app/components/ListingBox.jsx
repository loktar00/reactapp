/** @jsx React.DOM */
var React = require('react'),
    Reflux = require('reflux'),
    SearchBox = require('./SearchBox.jsx'),
    ListingThumb = require('./ListingThumb.jsx'),
    ListingInfo = require('./ListingInfo.jsx'),
    ListingActions = require('../actions/ListingActions'),
    ListingStore = require('../stores/ListingStore');

var ListingBox = React.createClass({
    mixins: [Reflux.ListenerMixin],
    displayName: 'ListingBox',
    getInitialState: function() {
        return {
            listings: [] 
        };
    },
    onStatusChange: function(data) {
        this.setState({
            listings: data
        });
    },
    componentWillMount: function() {
    },
    componentDidMount: function() {
        this.listenTo(ListingStore, this.onStatusChange);
        ListingActions.loadListings();
    },
    render: function() {
        var listingNodes = this.state.listings.map(function (listing) {
            var listingAddress = listing.addressStreet + ' ' + listing.addressNumber + ' ' + listing.city + ' ' + listing.state + ', ' + listing.zip;
        return (
            <div key={listing.addressStreet + listing.addressNumber}>
                <ListingThumb src={listing.image}/>
                <ListingInfo address={listingAddress} price={listing.price} bedrooms={listing.bedrooms} bathrooms={listing.bathrooms} squareFoot={listing.squareFootage} />
            </div>
          );
        });
        return (
            <div>
                <SearchBox />
                {listingNodes}
            </div>
        );
    }
});

module.exports = ListingBox;