import React, { useState } from "react";

import jobs from "./data";
import FilterList from "./infra/layout/FilterList";
import JobsList from "./infra/layout/JobsList";

const App = () => {
	const jobsList = jobs;
	const [filterList] = useState([]);

	return (
		<>
			<FilterList filterList={filterList} />
			<JobsList jobsList={jobsList} />
		</>
	);
};

export default App;
