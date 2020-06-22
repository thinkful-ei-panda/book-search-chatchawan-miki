import React from "react";

function PrintTypeFilter() {
    return (
        <div>
            <label>Print type: </label>
            <select>
                <option value="All">All</option>
                <option value="Books">Books</option>
                <option value="Magazines">Magazines</option>
            </select>
        </div>
    )
}

export default PrintTypeFilter;