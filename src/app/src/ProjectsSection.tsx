import { Project } from "@/data/resume";

interface Props {
	projects: Project[];
}

const ProjectsSection = ({ projects }: Props) => {
	return (
		<section className="mb_48">
			<h2 className="h2_heading font-serif dark:text-gray-100">Projects</h2>
			{projects.map((project, index) => (
				<div key={index} className="card">
					<div className="card_left">
						<h3 className="card_left_heading dark:text-gray-100">
							{project.url ? (
								<a
									href={project.url}
									target="_blank"
									rel="noopener noreferrer"
									className="link underline"
								>
									{project.name}
								</a>
							) : (
								project.name
							)}
						</h3>
						<div className="timeperiod dark:text-gray-400">
							<span>{project.dateRange}</span>
						</div>
						<div className="mt-1 pr-8 text-sm text-gray-700 dark:text-gray-200">
							{project.techStack.join(", ")}
						</div>
					</div>
					<div className="card_right">
						<div className="card_right_heading dark:text-gray-200">
							<strong>
								{project.subtitle}{" "}
								{project.url ? (
									<a
										href={project.url}
										target="_blank"
										rel="noopener noreferrer"
										className="link underline"
									>
										({project.url.replace(/^https?:\/\/?/, "")})
									</a>
								) : (
									""
								)}
							</strong>
						</div>
						<div>
							<ul className="p-0">
								{project.description.map((bullet, i) => (
									<li key={i} className="card_right_list dark:text-gray-200">
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

export default ProjectsSection;
