import React from "react";
import FilterItem from "../../components/FilterItem";
import "./style.scss";

const FilterList = ({ filterList }) => {
	return (
		<>
			{filterList.length > 0 && (
				<div className="filter-list">
					<div className="filter-list__filters">
						{filterList.map((filter) => (
							<FilterItem filterName={filter} key={filter} />
						))}
					</div>
					<button className="filter-list__clear-filters">
						Clear
					</button>
				</div>
			)}
		</>
	);
};

export default FilterList;
