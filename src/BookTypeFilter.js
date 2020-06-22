import React from "react";

class BookTypeFilter extends React.Component {
    onChangeFilter = (e) => {
        const filter = e.target.value;
        this.props.handleFilterButton(filter);
    }

    render() {
        return (
            <div>
                <label>Book type: </label>
                <select onChange={this.onChangeFilter}>
                    <option value="FILTER_UNDEFINED">Select Filter</option>
                    <option value="partial">Partial</option>
                    <option value="full">Full</option>
                    <option value="free-ebooks">Free eBooks</option>
                    <option value="paid-ebooks">Paid eBooks</option>
                    <option value="eBooks">eBooks</option>
                </select>
            </div>
        )
    }
}

export default BookTypeFilter;