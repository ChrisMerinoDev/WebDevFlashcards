import Flashcard from "../../components/Flashcard";

export default function FlashcardsPage() {
	return (
		<main className="container-narrow section-pad stack-lg">
			<div className="flex flex-col justify-center items-center text-center mb-8">
				<h1>Welcome to the Flashcards App</h1>
				<p>Start creating and reviewing your flashcards!</p>
			</div>

			<div className="flashcard-grid">
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
					question="What happens when you pass an empty dependency array to useEffect?"
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
					interviewReadyAnswer="React relies on immutability to detect state changes. If I mutate state directly, the reference doesn`t change, so React may not re-render the component."
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
					answer="B. If the next state depends on the previous state, you should pass a function to the state setter. This function receives the previous state as an argument and returns the new state. This ensures you always have the latest state value, even with asynchronous updates or batching."
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
			</div>

			<section className="div-center text-center my-16">
				<h1>How React handles UI interaction</h1>
			</section>

			<div className="flashcard-grid">
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

				<Flashcard
					id="20"
					title="Fetch Basics"
					question="When you call fetch(url), what does it return?"
					answer="fetch(url) returns a Promise that resolves to a Response object. This Response object contains metadata about the HTTP response (like status, headers) and methods to extract the response body (like .json(), .text())."
					keyFacts={[
						"Returns a Promise",
						"Promise resolves to a Response object",
						"Response object contains metadata and body extraction methods",
						"Must be awaited or chained with .then()",
						"Can be used with async/await for cleaner code",
						"Error handling is important when using fetch",
					]}
					interviewReadyAnswer="fetch(url) returns a Promise that resolves to a Response object. The Response object has methods like .json() and .text() to extract the response body."
					tags={["React", "fetch", "Promises", "HTTP"]}
				/>

				<Flashcard
					id="21"
					title="Fetch Basics"
					question="When you call fetch(url), what does it return?"
					answer="fetch(url) returns a Promise that resolves to a Response object. This Response object contains metadata about the HTTP response (like status, headers) and methods to extract the response body (like .json(), .text())."
					why="fetch() is asynchronous. It does NOT give you the data right away.
						It returns a Promise that resolves to a Response object, and then you still need to extract the body (like .json())."
					keyFacts={[
						"Returns a Promise",
						"Promise resolves to a Response object",
						"Response object contains metadata and body extraction methods",
						"Must be awaited or chained with .then()",
						"Can be used with async/await for cleaner code",
						"Error handling is important when using fetch",
					]}
					interviewReadyAnswer="The fetch function returns a Promise that resolves to a Response object. That Response contains metadata like status and headers, and we usually call methods like .json() or .text() on it to read the response body asynchronously."
					example="const res = await fetch('/api/users'); // res is a Response object
							 const data = await res.json();         // now you get the actual data"
					tags={["React", "fetch", "response", "JSON"]}
				/>

				<Flashcard
					id="22"
					title="Reading response data"
					question="What does response.json() return?"
					answer="response.json() returns a Promise that resolves to the parsed JSON data from the response body."
					why="Even after fetch() resolves, reading the body is still async. 
					response.json() returns another Promise that resolves to the parsed JavaScript object."
					keyFacts={[
						"Promise resolves to parsed JSON data",
						"Must be awaited or chained with .then()",
						"Can throw an error if the response body is not valid JSON",
						"Useful for reading API responses that return JSON",
					]}
					interviewReadyAnswer="response.json() returns a Promise that resolves to the parsed JavaScript object. Even after fetch resolves, reading the response body is asynchronous, so we have to await that too."
					example="const res = await fetch('/api/data');
							 const data = await res.json(); // waits for body to be read + parsed"
					tags={["React", "fetch", "response", "JSON"]}
				/>

				<Flashcard
					id="23"
					title="Async/Await meaning"
					question="What does the await keyword do?"
					answer="The await keyword pauses the execution of an async function until a Promise is resolved or rejected. It allows you to write asynchronous code that looks synchronous."
					why="await makes asynchronous code easier to read and reason about by avoiding deeply nested .then() chains."
					keyFacts={[
						"Pauses execution of async function",
						"Only works inside async functions",
						"Returns the resolved value of a Promise",
						"Can be used with any Promise-based API",
					]}
					interviewReadyAnswer="The await keyword pauses execution of an async function until a Promise is resolved or rejected. It allows you to write asynchronous code that looks synchronous and is much easier to read than deeply nested .then() chains."
					example="async function fetchData() {
							 const res = await fetch('/api/data');
							 const data = await res.json();
							 return data;
						 }"
					tags={["JavaScript", "async/await", "Promises"]}
				/>

				<Flashcard
					id="24"
					title="Handling errors with fetch"
					question="Which of the following is TRUE about fetch and errors?"
					selections={[
						"A: fetch() rejects the Promise on HTTP errors like 404 or 500.",
						"B: fetch() only rejects the Promise on network errors.",
						"C: fetch() throws an exception on HTTP errors.",
						"D: fetch() always returns null on errors.",
					]}
					answer="B. fetch() does not reject on HTTP errors like 404 or 500. It only rejects if there's a network error (e.g., no internet connection)."
					why="This is a common gotcha in JavaScript. fetch() resolves even if the server returns an error status code (like 404 or 500). You must check response.ok or response.status to handle errors properly."
					keyFacts={[
						"fetch() does not reject on HTTP errors",
						"Only rejects on network errors",
						"Must manually check response.ok or response.status",
						"Use try/catch for network-level errors",
					]}
					interviewReadyAnswer="Fetch only rejects on network failures, not HTTP errors like 404 or 500. For those cases, the Promise still resolves, so we need to check response.ok or the status code manually and throw our own error if needed."
					example="async function fetchData(url) {
							 try {
								const res = await fetch(url);
								if (!res.ok) {
									throw new Error(`HTTP error! status: ${res.status}`);
								}
								return await res.json();
							} catch (err) {
								console.error('Fetch error:', err);
							}
						}"
					tags={["JavaScript", "fetch", "error handling"]}
				/>

				<Flashcard
					id="25"
					title="try/catch with async/await"
					question="What does this catch?"
					selections={[
						`try {
  							const res = await fetch('/api/data');
  							const data = await res.json();
						} catch (err) {
  							console.log(err);
						}
						`,
					]}
					answer="This catches: 
						✔ Network failures from fetch
						✔ Errors thrown manually (throw new Error())
						✔ Errors from response.json() if parsing fails
						But remember — 404/500 do NOT throw automatically, so you must throw manually if !res.ok."
					why="The try/catch block is essential for handling errors in async/await code. If any error occurs within the try block (e.g., network error, JSON parsing error), it will be caught and handled in the catch block."
					keyFacts={[
						"Catches errors in async/await code",
						"Handles both network and parsing errors",
						"Prevents unhandled promise rejections",
					]}
					interviewReadyAnswer="A try/catch block around await calls catches rejected Promises, such as network failures, JSON parsing errors, or errors we throw manually. However, fetch does not throw for HTTP errors like 404 by default, so we need to check response.ok and throw ourselves."
					example={`try {
  							const res = await fetch('/api/data');

  							if (!res.ok) {
    						throw new Error('Server error');
  							}

  							const data = await res.json();
							} catch (err) {
  								console.error('Something went wrong:', err.message);
								}`}
					tags={["JavaScript", "async/await", "error handling"]}
				/>

				<Flashcard
					id="26"
					title="What makes a function async?"
					question="What does adding async before a function do?"
					answer="It makes the function always return a Promise. If you return a non-Promise value, it gets wrapped in a resolved Promise automatically."
					keyFacts={[
						"Makes function return a Promise",
						"Allows use of await inside the function",
						"Non-Promise return values are wrapped in a resolved Promise",
						"Helps write cleaner asynchronous code",
					]}
					interviewReadyAnswer="Declaring a function as async makes it automatically return a Promise. Even if the function returns a normal value, JavaScript wraps it in a resolved Promise. It also allows us to use the await keyword inside the function."
					example={`async function getNumber() {
  								return 5;
							}

							getNumber().then(console.log); // 5
							`}
					tags={["JavaScript", "async functions", "Promises"]}
				/>

				<Flashcard
					id="27"
					title="Promise states"
					question="Which of these is NOT a valid Promise state?"
					selections={[
						"A) Pending",
						"B) Fulfilled",
						"C) Rejected",
						"D) Completed",
					]}
					answer="D. A Promise can be in one of three states:
						✔ Pending: Initial state, neither fulfilled nor rejected
						✔ Fulfilled: Operation completed successfully
						✔ Rejected: Operation failed"
					why="Understanding Promise states is crucial for debugging and managing asynchronous operations effectively."
					keyFacts={[
						"Pending is the initial state",
						"Fulfilled means success",
						"Rejected means failure",
					]}
					interviewReadyAnswer="A Promise can be in one of three states: pending (initial state), fulfilled (success), or rejected (failure). These states are mutually exclusive and determine how a Promise behaves in asynchronous code."
					example=" const myPromise = new Promise((resolve, reject) => {
  							// async operation
							});

							// Initially, myPromise is in 'pending' state
							// Call resolve() to move to 'fulfilled'
							// Call reject() to move to 'rejected'"
					tags={["JavaScript", "Promises", "asynchronous"]}
				/>

				<Flashcard
					id="28"
					title=".then vs async/await"
					question="What is the main advantage of async/await over .then() chains?"
					answer="async/await is more readable and easier to debug than .then() chains. It allows you to write asynchronous code that looks synchronous."
					why="async/await is syntactic sugar over Promises and .then() chains, making code more readable and easier to debug."
					keyFacts={[
						"More readable than .then() chains",
						"Better debugging experience",
						"Looks synchronous but is asynchronous",
					]}
					interviewReadyAnswer="async/await is more readable and easier to debug than .then() chains. It allows you to write asynchronous code that looks synchronous, which makes it easier to understand and maintain."
					example="async function fetchData() {
  							const res = await fetch('/api/data');
  							const data = await res.json();
  							return data;
						}"
					tags={["JavaScript", "async/await", "Promises"]}
				/>

				<Flashcard
					id="29"
					title="Sending data with fetch"
					question="How do you send JSON data in a POST request with fetch?"
					answer="To send JSON data in a POST request with fetch, you must set the Content-Type header to 'application/json' and pass the data as a string using JSON.stringify()."
					why="Sending JSON data requires setting the correct headers and serializing the data properly. When sending JSON with fetch, you must:
					1. Set the method to POST (or PUT/PATCH)
					2. Set the 'Content-Type' header to 'application/json'
					3. Use JSON.stringify() to convert the JavaScript object to a JSON string
					4. Pass the stringified data in the request body
					If you forget JSON.stringify, the server gets [object Object]"
					keyFacts={[
						"Set Content-Type header to 'application/json'",
						"Use JSON.stringify() to serialize data",
						"Pass serialized data in request body",
					]}
					interviewReadyAnswer="To send JSON data in a POST request with fetch, you must set the Content-Type header to 'application/json' and pass the data as a string using JSON.stringify()."
					example="fetch('/api/data', {
  						method: 'POST',
  						headers: {
  							'Content-Type': 'application/json',
  						},
  						body: JSON.stringify({ name: 'John', age: 30 }),
  					});"
					tags={["JavaScript", "fetch", "POST requests", "JSON"]}
				/>

				<Flashcard
					id="30"
					title="Parallel requests"
					question="How do you make multiple fetch requests in parallel?"
					answer="Use Promise.all() to run multiple fetch requests in parallel. Pass an array of fetch promises to Promise.all(), and it returns a single promise that resolves when all the input promises resolve."
					why="Running multiple fetch requests in parallel is more efficient than running them sequentially, especially when the requests are independent of each other."
					keyFacts={[
						"Use Promise.all() for parallel requests",
						"Pass an array of fetch promises",
						"Returns a single promise that resolves when all input promises resolve",
					]}
					interviewReadyAnswer="To make multiple fetch requests in parallel, use Promise.all(). Pass an array of fetch promises to Promise.all(), and it returns a single promise that resolves when all the input promises resolve."
					example="const urls = ['/api/data1', '/api/data2', '/api/data3'];
							const fetchPromises = urls.map(url => fetch(url));
							const responses = await Promise.all(fetchPromises);
							const dataPromises = responses.map(res => res.json());
							const allData = await Promise.all(dataPromises);"
					tags={["JavaScript", "fetch", "parallel requests", "Promise.all"]}
				/>

				<Flashcard
					id="31"
					title="What is an API?"
					question="In frontend interviews, what is an API usually referring to?"
					answer=""
					why="In frontend interviews, when they say “working with APIs”, they mean:
						A backend service that exposes endpoints you can send requests to (like /users, /login, /products).
						You interact with it using HTTP methods like GET, POST, PUT, DELETE."
					keyFacts={[
						"Backend service exposing endpoints",
						"Use HTTP methods like GET, POST, PUT, DELETE",
						"Endpoints are URLs that return data",
					]}
					interviewReadyAnswer="In frontend interviews, an API usually refers to a backend service that exposes endpoints you can send requests to (like /users, /login, /products). You interact with it using HTTP methods like GET, POST, PUT, DELETE."
					tags={["JavaScript", "API", "HTTP methods"]}
				/>

				<Flashcard
					id="32"
					title="Big picture async"
					question="Why is JavaScript asynchronous when making API calls?"
					answer="JavaScript is asynchronous when making API calls because it runs on a single-threaded event loop. Making API calls is an I/O operation that can take a long time to complete. If JavaScript were synchronous, it would block the entire thread and make the UI unresponsive while waiting for the API response."
					why="JavaScript is single-threaded and uses an event loop. API calls are asynchronous because they are I/O operations that take time to complete. If JavaScript were synchronous, it would block the main thread and freeze the UI until the API call finishes."
					keyFacts={[
						"JavaScript is single-threaded",
						"API calls are I/O operations",
						"Event loop handles asynchronous operations",
						"Prevents blocking the main thread",
					]}
					interviewReadyAnswer="JavaScript is asynchronous when making API calls because it runs on a single-threaded event loop. Making API calls is an I/O operation that can take a long time to complete. If JavaScript were synchronous, it would block the entire thread and make the UI unresponsive while waiting for the API response."
					tags={["JavaScript", "asynchronous", "API calls", "event loop"]}
				/>
				<Flashcard
					id="33"
					title="React Performance"
					question="What is React.memo and when should you use it?"
					answer="React.memo is a higher-order component that prevents a functional component from re-rendering if its props have not changed. It performs a shallow comparison of props and reuses the previous render result when they are the same."
					why="By default, a child component re-renders whenever its parent re-renders. React.memo helps optimize performance by skipping unnecessary renders."
					keyFacts={[
						"Prevents unnecessary re-renders",
						"Performs shallow comparison of props",
						"Useful for pure functional components",
						"Improves performance in large component trees",
						"Not needed unless re-rendering causes performance issues",
					]}
					interviewReadyAnswer="React.memo is used to optimize performance by preventing a functional component from re-rendering when its props haven’t changed. It does a shallow comparison of props and reuses the previous render result."
					example={`const Button = React.memo(({ label }) => {
  console.log("Rendered");
  return <button>{label}</button>;
});`}
					tags={["React", "performance", "optimization"]}
				/>
			</div>
		</main>
	);
}
