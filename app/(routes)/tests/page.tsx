"use client";
import React, { useState } from "react";

const DynamicListPage = () => {
	const [items, setItems] = useState<string[]>([]);
	const [inputValue, setInputValue] = useState("");
	const [removedItems, setRemovedItems] = useState<string[]>([]);

	const handleAddItem = () => {
		if (!inputValue) return;
		setItems([...items, inputValue]);
		setInputValue("");
	};

	const handleRemoveItem = (index: number) => {
		const itemToRemove = items[index];
		setRemovedItems([...removedItems, itemToRemove]);
		setItems(items.filter((_, i) => i !== index));
	};

	return (
		<div className="text-center">
			<h1>Dynamic List Test</h1>
			<input
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				placeholder="Type your items"
				className="border p-2 rounded mb-4"
			/>
			<button
				onClick={handleAddItem}
				className="bg-blue-500 text-white p-2 rounded"
			>
				Add Item
			</button>

			<ul className="mt-4">
				{items.map((item, index) => (
					<li key={index} className="border-b py-2">
						{item}
						<button
							onClick={() => handleRemoveItem(index)}
							className="ml-4 bg-red-500 text-white p-1 rounded"
						>
							Remove
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default DynamicListPage;
