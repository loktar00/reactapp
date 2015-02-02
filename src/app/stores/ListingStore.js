var Reflux = require('Reflux'),
    reqwest = require('reqwest'),
    ListingActions = require('../actions/ListingActions');

var ListingStore = Reflux.createStore({
    init: function() {
        this.listings = [];
        this.listenTo(ListingActions.loadListings, this.loadListingData);    
    },
    loadListingData : function(){
        var self = this;
        reqwest({
            url: 'http://omahahomehunt.com/inc/listingResult.php',
            type: 'jsonp',
            success : function(results){
                self.listings = results;
                self.trigger(self.listings);
            }
        });
    },
    getListings : function(){
        return this.listings;
    }
});

module.exports = ListingStore;