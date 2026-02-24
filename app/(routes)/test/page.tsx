"use client";

import { useState } from "react";

const ToggleButtonPage = () => {
	const [isActive, setIsActive] = useState(false);

	const handleToggle = () => {
		setIsActive((prev) => !prev);
	};

	return (
		<div className="text-center">
			<h1>Toggle Button Test</h1>

			<button
				onClick={handleToggle}
				className={`px-4 py-2 rounded font-bold text-white transition hover:cursor-pointer
                ${isActive ? "bg-green-500" : "bg-blue-500"}`}
			>
				{isActive ? "ON" : "OFF"}
				<span className={`block ${isActive ? "text-white" : "text-gray-400"}`}>
					Status: {isActive ? "Active" : "Inactive"}
				</span>
			</button>
		</div>
	);
};

export default ToggleButtonPage;
