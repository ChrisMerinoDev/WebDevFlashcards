"use client";

import { useId, useState } from "react";

const Flashcard = ({
	id,
	title,
	question,
	answer,
	why,
	example,
	selections,
	keyFacts,
	interviewReadyAnswer,
	tags,
}: Flashcard) => {
	const [open, setOpen] = useState(false);
	const labelId = useId();
	const dialogId = `flashcard-dialog-${id || labelId}`;

	return (
		<>
			<article
				className="flashcard flashcard-clickable overflow-hidden"
				aria-labelledby={labelId}
				onClick={() => setOpen(true)}
				onKeyDown={(event) => {
					if (event.key === "Enter" || event.key === " ") {
						event.preventDefault();
						setOpen(true);
					}
				}}
				role="button"
				tabIndex={0}
			>
				{title && (
					<p className="flashcard-kicker" id={labelId}>
						{title}
					</p>
				)}
				<h3 className="flashcard-question">{question}</h3>
				{selections && selections.length > 0 && (
					<div className="flashcard-modal__section">
						<p className="flashcard-modal__label">Selections</p>
						<ul className="flashcard-list list-disc list-inside">
							{selections.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</div>
				)}
				<p className="flashcard-hint">Click to reveal the full answer</p>
			</article>

			{open && (
				<div
					className="flashcard-modal"
					role="dialog"
					aria-modal="true"
					aria-labelledby={dialogId}
				>
					<div
						className="flashcard-modal__backdrop"
						onClick={() => setOpen(false)}
					/>
					<div className="flashcard-modal__panel">
						<button
							type="button"
							className="flashcard-modal__close"
							onClick={() => setOpen(false)}
							aria-label="Close flashcard details"
						>
							Close
						</button>
						{title && (
							<p className="flashcard-kicker" id={dialogId}>
								{title}
							</p>
						)}
						<h3 className="flashcard-question">{question}</h3>

						<p className="flashcard-answer">{answer}</p>

						{keyFacts && keyFacts.length > 0 && (
							<div className="flashcard-modal__section">
								<p className="flashcard-modal__label">Key facts</p>
								<ul className="flashcard-list list-disc list-inside">
									{keyFacts.map((fact) => (
										<li key={fact}>{fact}</li>
									))}
								</ul>
							</div>
						)}

						{interviewReadyAnswer && (
							<div className="flashcard-modal__section">
								<p className="flashcard-modal__label">Interview-ready Answer</p>
								<p className="flashcard-answer">{interviewReadyAnswer}</p>
							</div>
						)}

						{why && (
							<div className="flashcard-modal__section">
								<p className="flashcard-modal__label">Why</p>
								<p className="flashcard-answer">{why}</p>
							</div>
						)}

						{example && (
							<div className="flashcard-modal__section">
								<p className="flashcard-modal__label">Example</p>
								<p className="flashcard-answer">{example}</p>
							</div>
						)}

						{tags && tags.length > 0 && (
							<div className="flashcard-tags">
								{tags.map((tag) => (
									<span key={tag} className="flashcard-tag">
										{tag}
									</span>
								))}
							</div>
						)}
					</div>
				</div>
			)}
		</>
	);
};

export default Flashcard;
