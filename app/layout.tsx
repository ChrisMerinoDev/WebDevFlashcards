import type { Metadata } from "next";
import {
	Fraunces,
	Geist,
	Geist_Mono,
	IBM_Plex_Mono,
	Manrope,
} from "next/font/google";
import "./globals.css";
import NavigationBar from "./components/navigation/NavigationBar";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const displayFont = Fraunces({
	variable: "--font-display",
	subsets: ["latin"],
});

const sansFont = Manrope({
	variable: "--font-sans",
	subsets: ["latin"],
});

const monoFont = IBM_Plex_Mono({
	variable: "--font-mono",
	subsets: ["latin"],
	weight: ["400", "600"],
});

export const metadata: Metadata = {
	title: "Web Dev Flashcards",
	description:
		"Master coding concepts with interactive flashcards. Create, review, and enhance your coding skills with our comprehensive flashcard app.",
	icons: {
		icon: "/webdevlogo.svg",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${displayFont.variable} ${sansFont.variable} ${monoFont.variable} antialiased`}
			>
				<NavigationBar
					links={[
						{ name: "Home" },
						{ name: "Flashcards" },
						{ name: "Patterns" },
						{ name: "Cheatsheets" },
					]}
				/>
				{children}
			</body>
		</html>
	);
}
