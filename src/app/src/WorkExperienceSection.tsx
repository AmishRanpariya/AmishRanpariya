import { WorkExperience } from "@/data/resume";

interface Props {
	workExperience: WorkExperience[];
}

const WorkExperienceSection = ({ workExperience }: Props) => {
	return (
		<section className="mb_48">
			<h2 className="h2_heading font-serif dark:text-gray-100">
				Work Experience
			</h2>
			{workExperience.map((job, index) => (
				<div className="card" key={index}>
					<div className="card_left">
						<h3 className="card_left_heading">
							<a
								href={job.companyUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="link underline dark:text-gray-200"
							>
								{job.company}
							</a>
						</h3>
						<div className="timeperiod dark:text-gray-400">
							<span>
								{job.startDate} - {job.endDate}
							</span>
						</div>
					</div>
					<div className="card_right">
						<div className="card_right_heading dark:text-gray-100">
							<strong>{job.title}</strong>
						</div>
						<div>
							<ul className="p-0">
								{job.bullets.map((bullet, bulletIndex) => (
									<li
										className="card_right_list dark:text-gray-200"
										key={bulletIndex}
									>
										{bullet}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			))}
		</section>
	);
};

export default WorkExperienceSection;
