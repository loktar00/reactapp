var Reflux = require('Reflux');

var ListingActions = Reflux.createActions([
        'loadListings',
        'getListing'
    ]);

module.exports = ListingActions;