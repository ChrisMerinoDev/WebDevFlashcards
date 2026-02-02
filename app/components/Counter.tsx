"use client";

import React, { useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount((count) => count + 1);
	};

	return (
		<div>
			<div>Counter: {count}</div>
			<button onClick={increment}>Increment</button>
		</div>
	);
};

export default Counter;
