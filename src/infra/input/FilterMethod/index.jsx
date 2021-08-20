import React from "react";
import "./style.scss";

const FilterMethod = ({ filterName, filterActions }) => {
	const { filterList, setFilterList } = filterActions;

	function handlerClick({ target }) {
		const filterToAdd = target.dataset.filter;

		if (!filterList.includes(filterToAdd))
			setFilterList([...filterList, filterToAdd]);
	}

	return (
		<button
			href="#"
			className="filter-method"
			data-filter={filterName}
			onClick={handlerClick}
		>
			{filterName}
		</button>
	);
};

export default FilterMethod;
