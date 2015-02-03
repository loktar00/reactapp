var Reflux = require('Reflux'),
    reqwest = require('reqwest'),
    ListingActions = require('../actions/ListingActions');

var ListingStore = Reflux.createStore({
    init: function() {
        this.listings = [];
        this.listenTo(ListingActions.loadListings, this.loadListingData);
        this.listenTo(ListingActions.getListings, this.getListings)    
    },
    loadListingData : function(){
        var self = this;
        reqwest({
            url: 'http://omahahomehunt.com/inc/listingResult.php',
            type: 'jsonp'
        }).then(function(results){
            self.listings = results;
            self.trigger(self.listings);
        });
    },
    getListings : function(data){
        var self = this;
        data.full = true;
        
        reqwest({
            url: 'http://omahahomehunt.com/inc/listingResult.php',
            method: 'post',
            data: JSON.stringify(data)
        }).then(function(results){
            console.log(results)
            self.listings = results;
            self.trigger(self.listings);
        });  
    }
});

module.exports = ListingStore;