import React from "react";
import "./style.scss";

const FilterItem = ({ filterName, filterActions }) => {
	const { filterList, setFilterList } = filterActions;

	function handlerClick({ target }) {
		const filterToRemove = target.dataset.filter;

		setFilterList(filterList.filter((filter) => filter !== filterToRemove));
	}

	return (
		<div className="filter-item">
			<span className="filter-item__name">{filterName}</span>
			<button
				className="filter-item__delete"
				data-filter={filterName}
				onClick={handlerClick}
			>
				<img src="icon-remove.svg" alt="" />
			</button>
		</div>
	);
};

export default FilterItem;
