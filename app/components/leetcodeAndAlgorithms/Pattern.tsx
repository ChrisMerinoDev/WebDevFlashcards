import React from "react";

const Pattern = ({ title, description, example }: Pattern) => {
	return (
		<div>
			<h2>{title}</h2>
			<p>{description}</p>
			<pre>{example}</pre>
		</div>
	);
};

export default Pattern;
