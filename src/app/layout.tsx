import type { Metadata } from "next";
import ThemeToggle from "./src/ThemeToggle";
import "./globals.css";

export const metadata: Metadata = {
	title: "Amish Ranpariya | Software Engineer",
	description:
		"Software engineer with 4+ years of experience developing scalable, high-performance applications using modern web technologies.",
	robots: "index,follow",
	openGraph: {
		type: "profile",
		title: "Amish Ranpariya | Software Engineer",
		description:
			"Software engineer with 4+ years of experience developing scalable, high-performance applications using modern web technologies.",
		images: [
			{
				url: "https://raw.githubusercontent.com/AmishRanpariya/AmishRanpariya/master/amish_avatar.jpg",
				width: 1344,
				height: 1344,
				alt: "Amish Ranpariya",
			},
		],
		url: "https://amishranpariya.github.io/AmishRanpariya/",
		firstName: "Amish",
		lastName: "Ranpariya",
		locale: "en_US",
		siteName: "Amish Ranpariya",
	},
	twitter: {
		title: "Amish Ranpariya | Software Engineer",
		description:
			"Software engineer with 4+ years of experience developing scalable, high-performance applications using modern web technologies.",
		images: [
			{
				url: "https://raw.githubusercontent.com/AmishRanpariya/AmishRanpariya/master/amish_avatar.jpg",
				width: 1344,
				height: 1344,
				alt: "Amish Ranpariya",
			},
		],
		card: "summary_large_image",
		site: "@RanpariyaAmish",
	},
	appleWebApp: {
		title: "Amish Ranpariya",
	},
	abstract:
		"Software engineer with 4+ years of experience developing scalable, high-performance applications using modern web technologies.",
	keywords:
		"Software Engineer, Software Development, Web Development, React, Next.js, Tailwind, Redux, Redux Toolkit, Cypress, Sentry, Stripe, Figma, AWS",
	applicationName: "Amish Ranpariya",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<script
					dangerouslySetInnerHTML={{
						__html: `(function() {
  var stored = localStorage.getItem('theme');
  if (stored === 'dark')) {
    document.documentElement.classList.add('dark');
  }
})();`,
					}}
				/>
				<meta charSet="utf-8" />
				<meta name="theme-color" content="#2a3ffb" />
				<meta name="msapplication-TileColor" content="#2a3ffb" />
				<meta name="viewport" content="width=device-width" />
				<meta name="googlebot" content="index,follow" />
				<link
					rel="preload"
					href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter&display=swap"
					as="style"
				/>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter&display=swap"
				/>
			</head>
			<body className="antialiased">
				{children}
				<ThemeToggle />
			</body>
		</html>
	);
}
