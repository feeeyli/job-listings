import React, { useState } from "react";

import jobs from "./data";
import JobsList from "./infra/layout/JobsList";

const App = () => {
	const [jobsList, setJobsList] = useState(jobs);

	return (
		<>
			<JobsList jobsList={jobsList} />
		</>
	);
};

export default App;
