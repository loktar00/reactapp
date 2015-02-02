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
            minPrice : 0,
            maxPrice : 9999999,
            beds : 0,
            baths : 0,
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
    handleUserInput : function(name, value){
        var change = {};
        change[name] = value;
        this.setState(change);
    },
    render: function() {
        var listingNodes = [];

        this.state.listings.forEach(function (listing) {

            if(listing.priceValue < this.state.minPrice || listing.priceValue > this.state.maxPrice || listing.bedrooms < this.state.beds || listing.bathrooms < this.state.baths){
                return;
            }

            var listingAddress = listing.addressStreet + ' ' + listing.addressNumber + ' ' + listing.city + ' ' + listing.state + ', ' + listing.zip;
            listingNodes.push(
                <div key={listing.addressStreet + listing.addressNumber}>
                    <ListingThumb src={listing.image}/>
                    <ListingInfo address={listingAddress} price={listing.price} bedrooms={listing.bedrooms} bathrooms={listing.bathrooms} squareFoot={listing.squareFootage} />
                </div>
              );
        }.bind(this));
        return (
            <div>
                <SearchBox onUserInput={this.handleUserInput}/>
                {listingNodes}
            </div>
        );
    }
});

module.exports = ListingBox;