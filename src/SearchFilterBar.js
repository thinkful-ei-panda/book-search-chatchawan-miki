import React from "react";
import Search from './Search';
import PrintTypeFilter from './PrintTypeFilter';
import BookTypeFilter from './BookTypeFilter';

function SearchFilterBar(props) {
    return(
      <div>
          <Search />
        <div>
            <PrintTypeFilter />
            <BookTypeFilter />
        </div>
      </div>
    );
};


export default SearchFilterBar;