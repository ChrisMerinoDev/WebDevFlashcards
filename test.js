const checkoutCalculator = (items, taxRate) => {
	const subtotal = items.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0,
	);
	const tax = subtotal * taxRate;
	console.log(items);
	console.log("Subtotal:", subtotal);
	console.log("Tax:", tax);
	const total = subtotal + tax;
	console.log("Total:", total);
	return true;
};

console.log(
	checkoutCalculator(
		[
			{ item: "Milk", price: 4.99, quantity: 2 },
			{ item: "Bread", price: 3.69, quantity: 1 },
			{ item: "Eggs", price: 5.68, quantity: 3 },
		],
		0.08,
	),
);
