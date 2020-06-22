import React from "react";

class PrintTypeFilter extends React.Component {
    onChangeFilter = (e) => {
        const printType = e.target.value;
        this.props.handlePrintTypeButton(printType);
    }
    
    render() {
        return (
            <div>
                <label>Print type: </label>
                <select onChange={this.onChangeFilter}>
                    <option value="All">All</option>
                    <option value="Books">Books</option>
                    <option value="Magazines">Magazines</option>
                </select>
            </div>
        );
    };
};

export default PrintTypeFilter;