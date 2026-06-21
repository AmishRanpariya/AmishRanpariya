export interface ContactInfo {
	email: string;
	phone: string;
	githubUrl: string;
	linkedinUrl: string;
}

export interface Header {
	name: string;
	designation: string;
	avatarPath: string;
	bio: string;
	contact: ContactInfo;
}

export interface SkillCategory {
	label: string;
	skills: string[];
}

export interface WorkExperience {
	company: string;
	companyUrl: string;
	title: string;
	startDate: string;
	endDate: string;
	bullets: string[];
}

export interface Education {
	institution: string;
	institutionUrl: string;
	degree: string;
	field: string;
	startYear: string;
	endYear: string;
	cgpa: string;
	distinction: string;
	coursework: string[];
}

export interface Project {
	name: string;
	subtitle: string;
	url: string;
	dateRange: string;
	techStack: string[];
	description: string[];
}

export interface Publication {
	title: string;
	doi: string;
	venue: string;
	date: string;
	tags: string[];
	bullets: string[];
}

export interface SocialLinks {
	githubUrl: string;
	linkedinUrl: string;
	instagramUrl: string;
}

export interface ResumeData {
	header: Header;
	skills: SkillCategory[];
	workExperience: WorkExperience[];
	education: Education[];
	projects: Project[];
	publications: Publication[];
	social: SocialLinks;
}

const resume: ResumeData = {
	header: {
		name: "Amish Ranpariya",
		designation: "Software Engineer",
		avatarPath: "/amish_avatar_2.jpg",
		bio: "Software engineer with 4+ years of experience developing scalable, high-performance applications using modern web technologies. Adept at leading cross-functional teams to deliver solutions that exceed expectations on time and within budget. Passionate about leveraging technology to drive meaningful change.",
		contact: {
			email: "amishranpariya@gmail.com",
			phone: "+918128167201",
			githubUrl: "https://github.com/AmishRanpariya",
			linkedinUrl: "https://www.linkedin.com/in/amishranpariya",
		},
	},

	skills: [
		{
			label: "Frameworks",
			skills: [
				"React, Next.js",
				"Node.js, Express.js",
				"Redux, Zustand",
				"WordPress, WooCommerce",
				"Tailwind CSS",
				"Chakra UI, Bootstrap",
			],
		},
		{
			label: "Languages",
			skills: [
				"TypeScript, JavaScript",
				"HTML, CSS",
				"PHP",
				"SQL, No-SQL, GraphQL",
				"C++, Python",
			],
		},
		{
			label: "Technology",
			skills: [
				"AWS",
				"Git, GitHub",
				"Sentry, New Relic",
				"Machine Learning",
				"Artificial Intelligence",
				"Sockets, WebRTC",
			],
		},
		{
			label: "Other",
			skills: [
				"SEO, AEO, Semrush",
				"Performance Optimization",
				"Stripe, PayPal",
				"Docker",
				"Figma",
				"Cypress, Jest",
			],
		},
	],

	workExperience: [
		{
			company: "rtCamp",
			companyUrl: "https://rtcamp.com/",
			title: "Software Engineer",
			startDate: "Jan 2024",
			endDate: "Present",
			bullets: [
				"Specialized in enterprise-level WordPress development, including plugin and theme development, headless WordPress, and Gutenberg block development.",
				"Enhanced performance for high-traffic auto dealership sites, achieving 50-70% improvement across LCP, TTFB, and FCP metrics by implementing server-side API caching, code refactoring, and page-level caching, significantly enhancing performance, reducing server load, and even lowering API costs.",
				"Delivered 7 high-performance websites for Cox Automotive by developing customized blocks and patterns, meeting CWV standards, and earning praise for early project completion and improved UX.",
				"Contributed to various projects, including plugin development, theme creation, and WooCommerce store setup, collaborating effectively with cross-functional teams.",
			],
		},
		{
			company: "SoftYoi LLP",
			companyUrl: "https://www.whimstay.com/",
			title: "Senior Software Engineer",
			startDate: "June 2022",
			endDate: "Jan 2024",
			bullets: [
				"Led the development of Whimstay's v4 web app, delivering it production-ready in 8 months with significant improvements in code quality, performance, and core web vitals.",
				"Reduced LCP for highly dynamic listing pages by 62% (from 5.5s to 2.1s) by implementing ISR, lazy loading, priority prefetching, and multilevel caching.",
				"Cut third-party API costs by 98% through multilevel caching strategies including Redis and CloudFront.",
				"Identified and mitigated DoS attacks with AWS WAF protection while ensuring no disruption to existing automation (e.g., Sentry, Google Merchants).",
				"Led 4 teams across 6 projects, driving collaboration and performance improvements.",
				"Promoted to senior role within 3 months of joining, after improving performance, web vitals, and SEO for the Whimstay app.",
			],
		},
		{
			company: "Edvora Inc",
			companyUrl: "https://www.edvora.com/",
			title: "Software Engineer",
			startDate: "Jan 2022",
			endDate: "June 2022",
			bullets: [
				"Promoted to Frontend Web-Tech Lead role within 3 months of starting as an intern, after developing more than 3 webapps from scratch to fully functional webapps by using NextJS.",
				"Sharpened my skills in React, Next.js, Sockets, Chakra UI, and many more technologies.",
				"Worked with many different Edvora APIs and third-party APIs.",
			],
		},
	],

	education: [
		{
			institution: "National Institute of Technology, Hamirpur (NITH)",
			institutionUrl: "https://nith.ac.in/",
			degree: "M.Tech.",
			field: "Computer Science and Engineering",
			startYear: "2023",
			endYear: "2024",
			cgpa: "9.27",
			distinction: "Silver Medalist",
			coursework: [
				"Computer Networks",
				"Artificial Intelligence",
				"Machine Learning",
			],
		},
		{
			institution: "National Institute of Technology, Hamirpur (NITH)",
			institutionUrl: "https://nith.ac.in/",
			degree: "B.Tech.",
			field: "Computer Science and Engineering",
			startYear: "2019",
			endYear: "2023",
			cgpa: "9.51",
			distinction: "Gold Medalist",
			coursework: [
				"Data Structures and Algorithms",
				"Object-Oriented Programming",
				"Database Systems",
				"Software Engineering",
				"Computer Networks",
				"Artificial Intelligence",
				"Machine Learning",
				"Natural Language Processing",
			],
		},
	],

	projects: [
		{
			name: "Whimstay App",
			subtitle: "Vacation Rentals Booking App",
			url: "https://www.whimstay.com",
			dateRange: "Nov 2022 - July 2023",
			techStack: [
				"React.js",
				"Next.js",
				"Tailwind",
				"Redux",
				"Redux Toolkit",
				"Cypress",
				"Sentry",
				"Stripe",
				"Figma",
				"AWS",
			],
			description: [
				"Led the development of Whimstay's v4 web app, delivering it production-ready in 8 months with significant improvements in code quality, performance, and core web vitals.",
				"Achieved a 62% reduction in LCP, from 5.5 seconds to 2.1 seconds, for highly dynamic listing pages, by utilizing ISR, strategic lazy loading, priority prefetching, and multilevel caching.",
				"98% cost reduction of third-party API with multilevel caching strategies (Redis, CloudFront, and browser).",
				"Integrated Stripe payment gateway for seamless transactions and Affirm for buy now pay later.",
				"Collaborated with the DevOps team to optimize app architecture, achieving significant performance gains without drastically increasing costs.",
			],
		},
		{
			name: "Biopic App",
			subtitle: "Website-Editor and Hosting Platform",
			url: "https://biopiceditor.web.app",
			dateRange: "July 2021 - June 2022",
			techStack: ["React.js", "Redux", "Tailwind", "Firebase"],
			description: [
				"Created a web editor for users to create and host websites.",
				"Gained exposure to new technologies, such as React, Redux, Firebase, PWA, Tailwind, and Figma.",
			],
		},
		{
			name: "Pigment Plate",
			subtitle: "Color Inspiration App",
			url: "https://pigmentplate.web.app",
			dateRange: "May 2020",
			techStack: ["React.js", "Redux", "Figma", "Firebase"],
			description: [
				"Created a platform to share color schemes and to inspire themselves with diverse, unique, and community-generated color palettes.",
				"Technologies used: React, Redux, Firebase, PWA.",
			],
		},
	],

	publications: [
		{
			title:
				"A Digital Twin Solution for Fault Detection in Time-Critical IIoT Applications",
			doi: "https://doi.org/10.1080/17477778.2025.2453725",
			venue: "Journal of Simulation (Taylor & Francis)",
			date: "January 2025",
			tags: ["Digital Twin", "Machine Learning", "Fault Detection", "IIoT"],
			bullets: [
				"Developed an end-to-end Digital Twin architecture leveraging a collaborative cloud-edge approach for real-time monitoring and fault detection in IIoT systems.",
				"Designed and implemented a lightweight, two-phased machine-learning ensemble model achieving 99.71% accuracy with a 4.8 ms average estimation delay.",
				"Addressed challenges such as network latency and resource-intensive processing, ensuring high accuracy and rapid response times in dynamic industrial environments.",
			],
		},
		{
			title:
				"PULSE: Proactive uncovering of latent severe anomalous events in IIoT using LSTM-RF model",
			doi: "https://doi.org/10.1007/s10586-024-04653-7",
			venue: "Cluster Computing (Springer Nature)",
			date: "July 2024",
			tags: ["Anomaly Detection", "LSTM", "Random Forest"],
			bullets: [
				"Designed a novel two-staged anomaly detection framework for IIoT systems, combining Long Short-Term Memory (LSTM) for temporal pattern recognition and Random Forest (RF) for robust classification.",
				"Addressed challenges of analyzing vast, heterogeneous, and complex IIoT data streams, ensuring precise anomaly detection even in imbalanced datasets.",
				"Evaluated the model on real-world datasets with short-term and long-term temporal dependencies, outperforming traditional approaches in accuracy and efficiency.",
			],
		},
	],

	social: {
		githubUrl: "https://github.com/AmishRanpariya",
		linkedinUrl: "https://www.linkedin.com/in/amish-ranpariya-753662156/",
		instagramUrl: "https://www.instagram.com/amish_ranpariya/",
	},
};

export default resume;
