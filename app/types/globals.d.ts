interface Flashcard {
	id: string;
	title?: string;
	question: string;
	selections?: string[];
	answer: string;
	keyFacts?: string[];
	interviewReadyAnswer?: string;
	tags?: string[];
}
