interface Flashcard {
	id: string;
	title?: string;
	question: string;
	selections?: string[];
	answer: string;
	why?: string;
	example?: string;
	keyFacts?: string[];
	interviewReadyAnswer?: string;
	tags?: string[];
}

interface Pattern {
	title: string;
	description: string;
	example: string;
}

interface NavigationBarLinks {
	links: NavigationBarLink[];
}

interface NavigationBarLink {
	name: string;
	isActive?: boolean;
}
