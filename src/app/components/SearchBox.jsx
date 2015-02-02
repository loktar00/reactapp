var React = require('react');

var SearchBox = React.createClass({
    render: function() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='number' placeholder='minimum' />
                <input type='number' placeholder='maximum' />
                <select>
                    <option value='0'>Any</option>
                    <option value='1'>1+</option>
                    <option value='2'>2+</option>
                    <option value='3'>3+</option>
                    <option value='4'>4+</option>
                    <option value='5'>5+</option>
                </select>
               <select>
                    <option value='0'>Any</option>
                    <option value='1'>1+</option>
                    <option value='2'>2+</option>
                    <option value='3'>3+</option>
                    <option value='4'>4+</option>
                    <option value='5'>5+</option>
                </select>
            </form>
        );
    }

});

module.exports = SearchBox;