import React from 'react';
import Search from './Search';
import PrintTypeFilter from './PrintTypeFilter';
import BookTypeFilter from './BookTypeFilter';

function SearchFilterBar(props) {
    return(
      <div>
        <Search handleSearchButton={props.handleSearchButton}/>
        <div>
            <PrintTypeFilter handlePrintTypeButton={props.handlePrintTypeButton} />
            <BookTypeFilter handleFilterButton={props.handleFilterButton} />
        </div>
      </div>
    );
};


export default SearchFilterBar;