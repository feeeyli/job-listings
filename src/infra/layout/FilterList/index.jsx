import React from "react";
import FilterItem from "../../components/FilterItem";
import "./style.scss";

const FilterList = ({ filterList, filterActions }) => {
	function handlerClick() {
		filterActions.setFilterList([]);
	}

	return (
		<>
			{filterList.length > 0 && (
				<div className="filter-list">
					<div className="filter-list__filters">
						{filterList.map((filter) => (
							<FilterItem
								filterName={filter}
								key={filter}
								filterActions={filterActions}
							/>
						))}
					</div>
					<button
						className="filter-list__clear-filters"
						onClick={handlerClick}
					>
						Clear
					</button>
				</div>
			)}
		</>
	);
};

export default FilterList;
