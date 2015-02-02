var React = require('react'),
    Router = require('react-router'),
    ListingBox = require('./components/ListingBox.jsx');

var Application = React.createClass({
    displayName: 'Application',
    render: function () {
        return (
            <div className="Application">
                <ListingBox />
            </div>
        );
    }
});

React.render(<Application />, document.getElementById('content'));
