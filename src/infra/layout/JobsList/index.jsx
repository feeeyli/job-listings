import React from "react";
import JobItem from "../../components/JobItem";
import "./style.scss";

const JobsList = ({ jobsList, filterActions }) => {
	return (
		<ul className="jobs-list">
			{jobsList.map((job) => (
				<JobItem key={job.id} job={job} filterActions={filterActions} />
			))}
		</ul>
	);
};

export default JobsList;
