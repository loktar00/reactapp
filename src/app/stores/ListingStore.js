var Reflux = require('reflux'),
    reqwest = require('reqwest'),
    ListingActions = require('../actions/ListingActions'),

    ListingStore = Reflux.createStore({
        init: function() {
            this.listings = [];
            this.listenTo(ListingActions.loadListings, this.loadListingData);
            this.listenTo(ListingActions.getListings, this.getListings)
        },
        loadListingData: function() {
            var _this = this;
            reqwest({
                url: 'http://omahahomehunt.com/inc/listingResult.php',
                type: 'jsonp'
            }).then(function(results) {
                _this.listings = results;
                _this.trigger(_this.listings);
            });
        },
        getListings: function(data) {
            var _this = this;
            data.full = true;

            reqwest({
                url: 'http://omahahomehunt.com/inc/listingResult.php',
                method: 'post',
                data: JSON.stringify(data)
            }).then(function(results) {
                _this.listings = results;
                _this.trigger(_this.listings);
            }, function(err, msg) {
                console.log(err, msg);
            });
        }
});

module.exports = ListingStore;
