import React from "react";
import JobItem from "../../components/JobItem";
import "./style.scss";

const JobsList = ({ jobsList }) => {
	return (
		<ul className="jobs-list">
			{jobsList.map((job) => (
				<JobItem key={job.id} job={job} />
			))}
		</ul>
	);
};

export default JobsList;
