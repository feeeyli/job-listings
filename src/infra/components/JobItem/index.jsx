import React from "react";

const JobItem = ({ job }) => {
	return (
		<li className={`job-item${job.featured ? " feature" : ""}`}>
			<img
				src={job.logo}
				alt="Logo Photosnap"
				className="job-item__logo"
			/>
			<div className="job-item__infos">
				<div className="infos__header">
					<h3 className="infos__company">{job.company}</h3>
					<div className="infos__labels">
						{job.new && <span className="label">NEW!</span>}
						{job.featured && <span className="label">FEATURE</span>}
					</div>
				</div>
				<h2 className="infos__position">{job.position}</h2>
				<div className="infos__footer">
					<span className="footer__posted">{job.postedAt}</span>
					<span className="footer__contract">{job.contract}</span>
					<span className="footer__location">{job.location}</span>
				</div>
			</div>
		</li>
	);
};

export default JobItem;
