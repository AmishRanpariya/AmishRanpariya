import type { SkillCategory } from "@/data/resume";

interface SkillsSectionProps {
	skills: SkillCategory[];
}

const SkillsSection = ({ skills }: SkillsSectionProps) => {
	return (
		<section className="mb_48">
			<h2 className="h2_heading font-serif dark:text-gray-100">Skills</h2>
			<div className="skill_category_container">
				{skills.map((category) => (
					<div key={category.label} className="skill_category">
						<h3 className="skill_category_heading dark:text-gray-100">
							{category.label}
						</h3>
						<div className="skill_category_list dark:text-gray-200">
							{category.skills.map((skill, i) => (
								<span key={i}>
									{skill}
									<br />
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default SkillsSection;
