const Flashcard = ({ id, title, question, answer, tags }: Flashcard) => {
	return (
		<div>
			<h2>{title}</h2>
			<h3>{question}</h3>
			<p>{answer}</p>
			{tags && tags.length > 0 && <div>Tags: {tags.join(", ")}</div>}
		</div>
	);
};

export default Flashcard;
