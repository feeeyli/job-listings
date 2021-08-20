import React from "react";
import "./style.scss";

const FilterItem = ({ filterName }) => {
	return (
		<div className="filter-item">
			<span className="filter-item__name">{filterName}</span>
			<button className="filter-item__delete" data-filter={filterName}>
				<img src="icon-remove.svg" alt="" />
			</button>
		</div>
	);
};

export default FilterItem;
