import React, { useEffect, useState } from "react";
import JobItem from "../../components/JobItem";
import "./style.scss";

const JobsList = ({ jobsList, filterActions, filterList }) => {
	const [filteredJobsList, setFilteredJobsList] = useState(jobsList);

	useEffect(() => {
		function filterListInclude(array) {
			return filterList.every((item) => array.includes(item));
		}
		setFilteredJobsList(
			filterList.length !== 0
				? jobsList.filter((job) =>
						filterListInclude([
							job.role,
							job.level,
							...job.languages,
							...job.tools,
						])
				  )
				: jobsList
		);
	}, [filterList, jobsList]);

	return (
		<ul className="jobs-list">
			{filteredJobsList.map((job) => (
				<JobItem key={job.id} job={job} filterActions={filterActions} />
			))}
		</ul>
	);
};

export default JobsList;
