import React from "react";

const JobsList = ({ jobsList }) => {
	return (
		<ul className="jobs-list">
			{jobsList.map((job) => (
				<li key={job.id}>{job.company}</li>
			))}
		</ul>
	);
};

export default JobsList;
