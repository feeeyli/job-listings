import React from "react";
import "./style.scss";

const FilterMethod = ({ filterName }) => {
	return (
		<button href="#" className="filter-method" data-filter={filterName}>
			{filterName}
		</button>
	);
};

export default FilterMethod;
