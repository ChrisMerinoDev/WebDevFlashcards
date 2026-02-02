import Counter from "./components/Counter";
import Flashcard from "./components/Flashcard";

export default function Home() {
	return (
		<main>
			<h1>Welcome to the Flashcards App</h1>
			<p>Start creating and reviewing your flashcards!</p>
			<Counter />
			<div>
				<Flashcard
					id="1"
					title="React Fundamentals"
					question="What is the primary purpose of useEffect in React?"
					answer="useEffect is used to run side effects in a React component, such as fetching data, setting up subscriptions, or syncing with external systems. It runs after the component renders, and the dependency array controls when it re-executes."
					tags={["React", "useEffect", "JavaScript"]}
				/>

				<Flashcard
					id="2"
					title="React Dependencies"
					question="What happens when you pass an empty dependency array [] to useEffect?"
					answer="When useEffect has an empty dependency array, it runs once after the initial render, similar to componentDidMount in class components. It will not run on subsequent re-renders unless the component is unmounted and remounted."
					tags={["React", "useEffect", "dependencies"]}
				/>

				<Flashcard
					id="3"
					title="Dependency Array Behavior"
					question="What causes a useEffect to re-run when dependencies are provided?"
					answer="A useEffect re-runs when one of its dependencies changes between renders. React uses Object.is to compare the previous and next values, so changes in reference for objects or arrays will also trigger it."
					tags={["React", "useEffect", "dependencies"]}
				/>

				<Flashcard
					id="4"
					title="JavaScript Fundamentals"
					question="Which JavaScript method is best for creating a new array by transforming each item in an existing array?"
					answer="The map() method is best for creating a new array by transforming each item in an existing array. It applies a function to every element in the array and returns a new array with the transformed elements."
					keyFacts={[
						"Does not mutate the original array",
						"Returns a new array",
						"Used for transformations.",
					]}
					interviewReadyAnswer="I use map() when I need to transform each item in an array and return a new array without mutating the original data. For example, if I have an array of numbers and I want to create a new array with each number doubled, I would use map() to apply the doubling function to each element."
					tags={["JavaScript", "map", "arrays"]}
				/>

				<Flashcard
					id="5"
					title="JavaScript Arrays"
					question="What is the return value of forEach()?"
					answer="The forEach() method does not return a value (it returns undefined). It simply executes a provided function once for each array element."
					keyFacts={[
						"Does not mutate the original array",
						"Returns undefined",
						"Used for side effects.",
					]}
					interviewReadyAnswer="I use forEach() when I need to iterate over an array and perform side effects, such as logging or updating external state. For example, if I have an array of numbers and I want to log each number, I would use forEach() to iterate through the array and log each element."
					tags={["JavaScript", "forEach", "arrays"]}
				/>

				<Flashcard
					id="6"
					title="React State"
					question="Why should you NOT mutate React state directly?"
					answer="Mutating React state directly can lead to unexpected behavior because React relies on state immutability to detect changes and trigger re-renders. Direct mutations can cause components to not update correctly, leading to bugs and inconsistent UI."
					keyFacts={[
						"State should be treated as immutable",
						"Use setState or state updater functions",
						"React uses reference comparison to detect changes",
						"Mutating state = same reference, no re-render",
						"Leads to bugs and inconsistent UI",
					]}
					interviewReadyAnswer="React relies on immutability to detect state changes. If I mutate state directly, the reference doesn’t change, so React may not re-render the component."
					tags={["React", "state management", "immutability"]}
				/>

				<Flashcard
					id="7"
					title="React State Updates"
					question="When updating state based on the previous state, which approach is correct?"
					selections={[
						"A: setCount(count + 1",
						"B: setCount(prevCount => prevCount + 1",
						"C: count++",
						"D: setCount = count + 1",
					]}
					answer="If the next state depends on the previous state, you should pass a function to the state setter. This function receives the previous state as an argument and returns the new state. This ensures you always have the latest state value, even with asynchronous updates or batching."
					keyFacts={[
						"State updates are asynchronous",
						"React may batch updates",
						"prevCount is guaranteed to be the latest value",
						"This can fail when: Multiple updates happen quickly. Updates are batched. You`re inside effects, timeouts, or event queues",
					]}
					interviewReadyAnswer="When the new state depends on the previous state, I use the functional updater form so React always uses the latest value, even with batched updates."
					tags={["React", "state management", "state updates"]}
				/>

				<Flashcard
					id="8"
					title="JavaScript Asynchronous Behavior"
					question="What does async/await actually do in JavaScript?"
					answer="async/await is syntactic sugar for working with promises. It allows you to write asynchronous code that looks synchronous, making it easier to read and understand. The async keyword makes a function return a promise, and await pauses the execution of the function until the promise resolves."
					keyFacts={[
						"async/await is syntactic sugar for promises",
						"async makes a function return a promise",
						"await pauses execution until the promise resolves",
						"Improves readability of asynchronous code",
						"Can be used with try/catch for error handling",
					]}
					interviewReadyAnswer="async/await is syntactic sugar over promises that allows asynchronous code to be written in a more readable, synchronous-looking style without blocking the main thread."
					tags={["React", "state management", "state updates"]}
				/>
				<Flashcard
					id="9"
					title="React Basics"
					question="What is the purpose of useState in React?"
					answer="useState is a React hook that allows you to add state to functional components. It returns an array with two elements: the current state value and a function to update that state value."
					keyFacts={[
						"useState is a React hook",
						"Returns an array with current state and setter function",
						"Used for managing local component state",
						"State is preserved between renders",
						"Can be used multiple times in a component",
					]}
					interviewReadyAnswer="useState allows a functional component to store and update local state. When the state setter function is called, React triggers a re-render so the UI reflects the new state."
					tags={["React", "state management", "hooks"]}
				/>
				<Flashcard
					id="10"
					title="React Basics"
					question="When does a React component re-render?"
					answer="A React component re-renders when its state or props change. When the state is updated using the state setter function from useState, or when new props are passed down from a parent component, React triggers a re-render to update the UI accordingly."
					keyFacts={[
						"Re-renders occur on state or prop changes",
						"State updates via setter functions trigger re-renders",
						"New props from parent components cause re-renders",
						"Re-renders update the UI to reflect the latest data",
						"React uses a virtual DOM to optimize re-rendering",
					]}
					interviewReadyAnswer="A React component re-renders whenever its state or props change, ensuring the UI stays in sync with the underlying data."
					tags={["React", "re-rendering", "component lifecycle"]}
				/>
				<Flashcard
					id="11"
					title="React Basics"
					question="What is the main difference between props and state in React?"
					answer="Props (short for properties) are read-only data passed from parent to child components, while state is local data managed within a component that can be updated over time."
					keyFacts={[
						"Props are read-only and passed down from parent to child",
						"State is local and managed within a component",
						"Props are used for communication between components",
						"State is used for managing component's internal data",
						"Changes to props trigger re-renders in child components",
						"Changes to state trigger re-renders in the same component",
					]}
					interviewReadyAnswer="Props are read-only data passed from parent to child components, while state is local data managed within a component that can be updated over time."
					tags={["React", "props", "state"]}
				/>
				<Flashcard
					id="12"
					title="React Basics"
					question="Why do we use “keys” when rendering lists in React?"
					answer="Keys help React identify which items have changed, been added, or removed from a list. They should be unique and stable to ensure efficient updates and avoid rendering issues."
					keyFacts={[
						"Keys should be unique among siblings",
						"Helps React optimize rendering of lists",
						"Prevents unnecessary re-renders",
						"Should be stable and not change over time",
						"Avoid using array index as key if items can change order",
					]}
					interviewReadyAnswer="Keys help React identify which items have changed, been added, or removed from a list. They should be unique and stable to ensure efficient updates and avoid rendering issues."
					tags={["React", "lists", "keys"]}
				/>
				<Flashcard
					id="13"
					title="React Basics"
					question="What is “lifting state up” in React?"
					answer="Lifting state up is a technique where you move the state from a child component to a parent component so that multiple components can share and manage the same state."
					keyFacts={[
						"State is moved from child to parent component",
						"Allows multiple components to share the same state",
						"Facilitates communication between sibling components",
						"Helps maintain a single source of truth for shared data",
						"Improves state management in complex component hierarchies",
					]}
					interviewReadyAnswer="When multiple components need access to the same data, we lift the state up to their nearest common ancestor so it becomes the single source of truth, and we pass it down via props."
					tags={[
						"React",
						"state management",
						"lifting state up",
						"component communication",
					]}
				/>
				<Flashcard
					id="14"
					title="React Basics"
					question="What problem does useEffect help solve in React?"
					answer="useEffect helps solve the problem of side effects in React components. It allows you to perform side effects like data fetching, subscriptions, or DOM manipulation in a way that is declarative and doesn't interfere with the rendering process."
					keyFacts={[
						"useEffect handles side effects in React components",
						"Used for data fetching, subscriptions, or DOM manipulation",
						"Can be used to run code after component renders",
						"Can be used to clean up side effects when component unmounts",
						"Helps separate concerns by keeping side effects in one place",
					]}
					interviewReadyAnswer="useEffect lets us run side effects after React updates the DOM. It keeps the render function pure while handling things like data fetching, subscriptions, or manual DOM interactions."
					tags={["React", "useEffect", "side effects", "component lifecycle"]}
				/>

				<section>
					<h1>How React handles UI interaction</h1>

					<div>
						<Flashcard
							id="15"
							question="What is conditional rendering in React?"
							answer="Conditional rendering means displaying different UI depending on state or props. React lets us decide what to show using JavaScript logic like if statements, ternary operators, or &&."
							keyFacts={[
								"Displays different UI based on state or props",
								"Uses JavaScript logic (if, ternary, &&) to decide what to render",
								"Helps create dynamic and interactive user interfaces",
								"Can improve performance by avoiding unnecessary renders",
								"Commonly used for loading states, authentication, and feature toggles",
							]}
							interviewReadyAnswer="Conditional rendering allows us to render different components or elements based on the application`s current state or props. For example, showing a loading spinner while data is being fetched, and then showing the content once the data arrives."
							tags={["React", "conditional rendering", "UI interaction"]}
						/>

						<Flashcard
							id="16"
							question="What is a “controlled input” in React?"
							answer="A controlled input is an input element whose value is controlled by React state. The component's value is set by state, and changes are handled via event handlers that update the state."
							keyFacts={[
								"Value is controlled by React state",
								"Changes are handled via event handlers",
								"Prevents inconsistencies between UI and state",
								"Ensures predictable behavior in forms",
							]}
							interviewReadyAnswer="In a controlled component, the input’s value comes from state, and we update that state using an onChange handler. This keeps the UI and the application state in sync."
							tags={["React", "forms", "controlled components"]}
						/>

						<Flashcard
							id="17"
							question="Why is it important to add a dependency array to useEffect?"
							answer="The dependency array in useEffect tells React when to re-run the effect. Without it, the effect runs after every render, which can cause performance issues or infinite loops. With a proper dependency array, we ensure the effect only runs when specific values change."
							keyFacts={[
								"Prevents unnecessary re-runs of effects",
								"Improves performance by avoiding infinite loops",
								"Ensures effects run only when dependencies change",
								"Helps manage side effects more predictably",
								"Ensures predictable behavior in forms",
							]}
							interviewReadyAnswer="The dependency array controls when useEffect re-executes. If a value inside the array changes, React re-runs the effect. This helps avoid unnecessary runs and prevents bugs like infinite loops."
							tags={["React", "useEffect", "dependencies", "performance"]}
						/>

						<Flashcard
							id="18"
							question="What is the purpose of the key prop when rendering a list?"
							answer="The key prop helps React identify which items have changed, been added, or been removed in a list. It ensures efficient updates and prevents rendering issues when the list changes."
							keyFacts={[
								"Helps React identify changes in lists",
								"Improves rendering performance",
								"Prevents UI inconsistencies",
								"Must be unique among siblings",
								"Should not be generated on-the-fly during rendering",
								"Helps manage side effects more predictably",
								"Ensures predictable behavior in forms",
							]}
							interviewReadyAnswer="Keys help React`s reconciliation algorithm determine how to update the UI by uniquely identifying elements in a list across renders."
							tags={["React", "lists", "keys", "performance"]}
						/>

						<Flashcard
							id="19"
							question="What happens if you update state directly instead of using the state setter function (like setState or setSomething)?"
							answer="If you update state directly, React won't know that the component needs to re-render. This can lead to UI inconsistencies and bugs because React relies on the state setter functions to track changes and trigger re-renders."
							keyFacts={[
								"Direct state updates don't trigger re-renders",
								"Can cause UI inconsistencies",
								"React doesn't track direct state changes",
								"Always use state setter functions for updates",
								"Must be unique among siblings",
								"Should not be generated on-the-fly during rendering",
								"Helps manage side effects more predictably",
								"Ensures predictable behavior in forms",
							]}
							interviewReadyAnswer="Directly mutating state bypasses React`s change detection, so the UI may not update as expected. Always use the provided setter functions to ensure React knows about the change."
							tags={["React", "state management", "immutability"]}
						/>
					</div>
				</section>
			</div>
		</main>
	);
}
