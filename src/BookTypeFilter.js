import React from "react";

function BookTypeFilter() {
    return (
        <div>
            <label>Book type: </label>
            <select>
                <option value="Partial">Partial</option>
                <option value="Full">Full</option>
                <option value="Free-eBooks">Free-eBooks</option>
                <option value="Paid">Paid</option>
                <option value="eBooks">eBooks</option>
            </select>
        </div>
    )
}

export default BookTypeFilter;