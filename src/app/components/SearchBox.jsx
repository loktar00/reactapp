var React = require('react');

var SearchBox = React.createClass({
    handleSubmit : function(e){
        e.preventDefault();
        this.props.onFormSubmit();
    },
    handleChange : function(e){
        this.props.onUserInput(e.target.name, e.target.value);
    },
    render: function() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='number' name='minPrice' placeholder='minimum' onChange={this.handleChange}/>
                <input type='number' name='maxPrice' placeholder='maximum' onChange={this.handleChange}/>
                <select name='beds' onChange={this.handleChange}>
                    <option value='0'>Any</option>
                    <option value='1'>1+</option>
                    <option value='2'>2+</option>
                    <option value='3'>3+</option>
                    <option value='4'>4+</option>
                    <option value='5'>5+</option>
                </select>
               <select name='baths' onChange={this.handleChange}>
                    <option value='0'>Any</option>
                    <option value='1'>1+</option>
                    <option value='2'>2+</option>
                    <option value='3'>3+</option>
                    <option value='4'>4+</option>
                    <option value='5'>5+</option>
                </select>
                <input type='submit' name='submit' value="Search" />
            </form>
        );
    }

});

module.exports = SearchBox;