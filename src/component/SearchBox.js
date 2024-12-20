import React from "react";

const SearchBox = ({searchChange}) => {

    return(
        <div className="tc">
            <input className="br4 b--solid b--black tc mb5 pv3 ph4 " type="search" 
            placeholder="Search Character"
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;