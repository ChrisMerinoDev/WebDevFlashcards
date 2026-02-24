"use client";
import { useRef, useState } from "react";

export default function HomePage() {
	const [isMuted, setIsMuted] = useState(true);
	const iframeRef = useRef<HTMLIFrameElement | null>(null);
	const videoId = "A3Su1G0Fm7Q";
	const videoUrl = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&controls=0&rel=0&playsinline=1&autoplay=1&mute=1&loop=1&playlist=${videoId}`;

	function sendYouTubeCommand(func: "mute" | "unMute") {
		iframeRef.current?.contentWindow?.postMessage(
			JSON.stringify({
				event: "command",
				func,
				args: [],
			}),
			"https://www.youtube.com",
		);
	}

	function toggleMute() {
		const nextMuted = !isMuted;
		sendYouTubeCommand(nextMuted ? "mute" : "unMute");
		setIsMuted(nextMuted);
	}

	return (
		<main className="container-narrow section-pad stack-lg">
			<div className="flex flex-col justify-center items-center text-center mb-8">
				<h1>Welcome to the Flashcards App</h1>
				<p className="text-lg">
					Your ultimate tool for mastering coding concepts through interactive
					flashcards. Whether you&apos;re a beginner looking to grasp the basics
					or an experienced developer aiming to reinforce your knowledge, our
					app provides a dynamic and engaging way to learn and review key coding
					topics. Dive in and start creating your personalized flashcards to
					boost your coding skills today!
				</p>
				<br />

				<h3>You can check out the founder&apos;s story below in this video</h3>

				<iframe
					ref={iframeRef}
					src={videoUrl}
					width="800"
					height="500"
					title="Flashcards demo video"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
					className="max-w-2xl max-h-96 shadow-md"
				></iframe>
				<button
					type="button"
					onClick={toggleMute}
					className="my-3 rounded-md border px-3 py-2 text-sm hover:cursor-pointer hover:bg-gray-400"
				>
					{isMuted ? "Unmute video" : "Mute video"}
				</button>
				<h3>Start creating and reviewing your flashcards!</h3>
				<h4>
					Use the navigation bar above to explore flashcards and patterns.
				</h4>
			</div>
		</main>
	);
}
