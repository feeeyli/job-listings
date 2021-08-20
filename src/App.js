import React, { useState } from "react";

import jobs from "./data";
import FilterList from "./infra/layout/FilterList";
import JobsList from "./infra/layout/JobsList";

const App = () => {
	const jobsList = randomJobsList();
	const [filterList, setFilterList] = useState([]);

	function randomJobsList() {
		const newJobs = jobs.filter((job) => job.new);
		const notNewJobs = jobs.filter((job) => !job.new);

		return [...newJobs, ...notNewJobs.sort(() => 0.5 - Math.random())];
	}

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
