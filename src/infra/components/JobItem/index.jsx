import React from "react";
import FilterMethod from "../../input/FilterMethod";
import "./style.scss";

const JobItem = ({ job }) => {
	const jobFilters = [job.role, job.level, ...job.languages, ...job.tools];

	return (
		<li className={`job-item${job.featured ? " feature" : ""}`}>
			<img
				src={job.logo}
				alt="Logo Photosnap"
				className="job-item__logo"
			/>
			<div className="job-item__infos">
				<div className="infos__header">
					<h3 className="header__company">{job.company}</h3>
					<div className="header__labels">
						{job.new && <span className="label new">NEW!</span>}
						{job.featured && (
							<span className="label featured">FEATURED</span>
						)}
					</div>
				</div>
				<h2 className="infos__position">{job.position}</h2>
				<div className="infos__footer">
					<span className="footer__posted">{job.postedAt}</span>
					<span className="footer__contract">{job.contract}</span>
					<span className="footer__location">{job.location}</span>
				</div>
			</div>
			<div className="job-item__filters">
				{jobFilters.map((filter, key) => (
					<FilterMethod filterName={filter} key={key} />
				))}
			</div>
		</li>
	);
};

export default JobItem;
