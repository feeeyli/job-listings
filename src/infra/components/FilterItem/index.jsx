import React from 'react';

const FilterItem = ({ filterName }) => {
    return (
        <div className="filters__filter">
            <span className="filter__name">{filterName}</span>
            <button className="filter__delete" data-filter={filterName}></button>
        </div>
    );
}

export default FilterItem