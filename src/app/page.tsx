import EducationSection from "./src/EducationSection";
import JsonSchemas from "./src/JsonSchemas";
import ProjectsSection from "./src/ProjectsSection";
import ResearchSection from "./src/ResearchSection";
import ResumeFooter from "./src/ResumeFooter";
import ResumeHeader from "./src/ResumeHeader";
import SkillsSection from "./src/SkillsSection";
import WorkExperienceSection from "./src/WorkExperienceSection";
import resumeData from "@/data/resume";

export default function Home() {
	return (
		<>
			<JsonSchemas data={resumeData} />
			<div className="main_container">
				<div className="wrapper">
					<div className="innerWrapper">
						<div className="main">
							<ResumeHeader header={resumeData.header} />
							<main>
								<SkillsSection skills={resumeData.skills} />
								<WorkExperienceSection workExperience={resumeData.workExperience} />
								<EducationSection education={resumeData.education} />
								<ProjectsSection projects={resumeData.projects} />
								<ResearchSection publications={resumeData.publications} />
							</main>
						</div>
					</div>
					<ResumeFooter social={resumeData.social} />
				</div>
			</div>
		</>
	);
}
