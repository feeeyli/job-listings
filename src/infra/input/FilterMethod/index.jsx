import React from "react";

const FilterMethod = ({ filterName }) => {
	return (
		<button href="#" className="filter-method" data-filter={filterName}>
			{filterName}
		</button>
	);
};

export default FilterMethod;
