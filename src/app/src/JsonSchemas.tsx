import React from "react";
import { ResumeData } from "@/data/resume";

interface JsonSchemasProps {
	data: ResumeData;
}

const JsonSchemas = ({ data }: JsonSchemasProps) => {
	const { header, workExperience, publications, social } = data;

	const personSchema = {
		"@context": "https://schema.org/",
		"@type": "Person",
		name: header.name,
		email: header.contact.email,
		sameAs: [social.githubUrl, social.linkedinUrl, social.instagramUrl],
		jobTitle: header.designation,
		worksFor: {
			"@type": "Organization",
			name: workExperience[0]?.company,
		},
	};

	return (
		<>
			<script type="application/ld+json">
				{JSON.stringify(personSchema)}
			</script>
			{publications.map((pub) => {
				const articleSchema = {
					"@context": "https://schema.org",
					"@type": "Article",
					mainEntityOfPage: {
						"@type": "WebPage",
						"@id": pub.doi,
					},
					headline: pub.title,
					description: pub.bullets.join(" "),
					image: "",
					author: {
						"@type": "Person",
						name: header.name,
					},
					publisher: {
						"@type": "Organization",
						name: pub.venue,
					},
					datePublished: pub.date,
				};

				return (
					<script key={pub.doi} type="application/ld+json">
						{JSON.stringify(articleSchema)}
					</script>
				);
			})}
		</>
	);
};

export default JsonSchemas;
