import { Education } from "@/data/resume";

interface Props {
	education: Education[];
}

const EducationSection = ({ education }: Props) => {
	return (
		<section className="mb_48 education">
			<h2 className="h2_heading font-serif dark:text-gray-100">Education</h2>
			{education.map((edu, idx) => (
				<div className="card" key={idx}>
					<div className="card_left">
						<h3 className="card_left_heading">
							<a
								href={edu.institutionUrl}
								target="_blank"
								rel="noopener noreferrer nofollow ugc"
								className="link dark:text-blue-400"
							>
								{edu.institution}
							</a>
						</h3>
						<div className="timeperiod dark:text-gray-400">
							<span>
								{edu.startYear} - {edu.endYear}
							</span>
						</div>
					</div>
					<div className="card_right">
						<strong className="card_right_heading dark:text-gray-100">
							{edu.degree} in {edu.field}
						</strong>
						<div>
							<p className="card_right_body dark:text-gray-200">
								<strong>{edu.distinction}</strong> - {edu.cgpa} CGPA
							</p>
							<p className="card_right_body dark:text-gray-200">
								Coursework: {edu.coursework.join(", ")}
							</p>
						</div>
					</div>
				</div>
			))}
		</section>
	);
};

export default EducationSection;
