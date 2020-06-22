import React from "react";

class Search extends React.Component {
    onSubmitForm = (e) => {
        e.preventDefault();
        this.props.handleSearchButton(e.target.searchTerm.value)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitForm}>
                    <label>Search: </label>
                    <input name="searchTerm" placeholder="e.g. Asimov" type="text"></input>
                    <button type="submit">Search!</button>
                </form>
            </div>
        );
    };
};

export default Search;