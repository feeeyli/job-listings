import React, { useState } from "react";

import jobs from "./data";
import FilterList from "./infra/layout/FilterList";
import JobsList from "./infra/layout/JobsList";

const App = () => {
	const jobsList = jobs;
	const [filterList, setFilterList] = useState([]);

	return (
		<>
			<FilterList
				filterList={filterList}
				filterActions={{ filterList, setFilterList }}
			/>
			<JobsList
				jobsList={jobsList}
				filterActions={{ filterList, setFilterList }}
				filterList={filterList}
			/>
		</>
	);
};

export default App;
