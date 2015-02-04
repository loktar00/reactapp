var Reflux = require('reflux');

var ListingActions = Reflux.createActions([
        'loadListings',
        'getListings'
    ]);


ListingActions.getListings.listen( function(data) {});

module.exports = ListingActions;