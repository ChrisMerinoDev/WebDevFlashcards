const page = () => {
	return (
		<div>
			<h1>JavaScript Cheatsheet</h1>

			<h2>
				This page contains a collection of JavaScript concepts and best
				practices for quick reference.
			</h2>

			<div>
				<h3>What is fetch?</h3>
				<p>
					fetch is a browser API for making HTTP requests. It returns a Promise
					that resolves to a Response object, which represents the response to
					the request.
				</p>

				<h4>Example:</h4>
				<pre>
					fetch(&apos;https://api.example.com/data&apos;) .then(response =&gt;
					response.json()) .then(data =&gt; console.log(data)) .catch(error
					=&gt; console.error(&apos;Error:&apos;, error));
				</pre>

				<h3>What is a closure?</h3>
				<p>
					A closure is a function that retains access to its lexical scope, even
					when the function is executed outside that scope.
				</p>

				<h4>Example:</h4>
				<pre>
					{`function outerFunction(outerVariable) {
                        return function innerFunction(innerVariable) {
                        console.log('Outer Variable: ' + outerVariable);
                        console.log('Inner Variable: ' + innerVariable);
                        };
                    }

                    const newFunction = outerFunction('outside');
                    newFunction('inside'); // Logs both variables`}
				</pre>

				<h3>Why two awaits?</h3>
				<p>
					First we await the network response, then we await parsing the body
					with .json().
				</p>
				<h4>Example:</h4>
				<pre>
					{`const response = await fetch('https://api.example.com/data');
                      const data = await response.json();`}
				</pre>

				<h3>Does fetch throw on 404?</h3>
				<p>
					No, fetch only throws on network errors. We check response.ok
					manually.
				</p>
				<h4>Example:</h4>
				<pre>
					{`const response = await fetch('https://api.example.com/data');
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        const data = await response.json();`}
				</pre>

				<h3>Why async/await over .then()?</h3>
				<p>Cleaner, more readable, and easier error handling with try/catch.</p>
				<h4>Example:</h4>
				<pre>
					{`// Using async/await
                        async function fetchData() {
                            try {
                                const response = await fetch('https://api.example.com/data');
                                const data = await response.json();
                                console.log(data);
                            } catch (error) {
                                console.error('Error:', error);
                            }
                        }

                        // Using .then()
                        function fetchData() {
                            fetch('https://api.example.com/data')
                                .then(response =&gt; response.json())
                                .then(data =&gt; console.log(data))
                                .catch(error =&gt; console.error('Error:', error));
                        }`}
				</pre>

				<h3>How to send JSON?</h3>
				<p>
					POST method, JSON.stringify body, and Content-Type: application/json
					header.
				</p>
				<h4>Example:</h4>
				<pre>
					{`const response = await fetch('https://api.example.com/data', {    
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ key: 'value' })
                    });
                    const data = await response.json();`}
				</pre>

				<h3>How to run requests in parallel?</h3>
				<p>Use Promise.all() to run multiple fetch requests concurrently.</p>
				<h4>Example:</h4>
				<pre>
					{`const urls = [
                        'https://api.example.com/data1',
                        'https://api.example.com/data2',
                        'https://api.example.com/data3'
                    ];

                    const fetchData = async () => {
                        try {
                            const responses = await Promise.all(urls.map(url => fetch(url)));
                            const data = await Promise.all(responses.map(res => res.json()));
                            console.log(data);
                        } catch (error) {
                            console.error('Error:', error);
                        }
                    };`}
				</pre>

				<h1>Common JavaScript Interview Questions</h1>

				<br />

				<h3>What are the differences between var, let and const ?</h3>
				<p>
					var is function-scoped and can be redeclared. let and const are
					block-scoped, with const being immutable after assignment.
				</p>
				<h4>Example:</h4>
				<pre>
					{`function example() {
						var x = 1;
						if (true) {
							var x = 2; // Same variable, redeclared
							console.log(x); // 2
						}
						console.log(x); // 2
					}

					function example() {
						let y = 1;
						if (true) {
							let y = 2; // Different variable, block-scoped
							console.log(y); // 2
						}
						console.log(y); // 1
					}

					const z = 1;
					z = 2; // Error: Assignment to constant variable.`}
				</pre>

				<h3>Explain the difference between == and ===</h3>
				<p>
					== performs type coercion before comparing values, while === does not
					coerce types and requires both value and type to be identical.
				</p>
				<h4>Example:</h4>
				<pre>
					{`console.log(5 == "5"); // true (coerced to same type)
                        console.log(5 === "5"); // false (different types)`}
				</pre>

				<h3>What is the difference between null, undefined, and undeclared?</h3>
				<p>
					null is an assignment value that represents no value or no object.
					undefined is a value that is assigned to variables that are not yet
					defined. An undeclared variable is one that has not been declared in
					the code.
				</p>
				<h4>Example:</h4>
				<pre>
					{`let a; // a is declared but not assigned
						console.log(a); // undefined
						console.log(b); // ReferenceError: b is not defined
						const c = null;
						console.log(c); // null`}
				</pre>

				<h3>What is &quot;hoisting&quot; in JavaScript?</h3>
				<p>
					Hoisting is JavaScript&#39;s default behavior of moving declarations
					to the top of the current scope. This means that variables and
					functions can be used before they are declared.
				</p>
				<h4>Example:</h4>
				<pre>
					{`console.log(x); // undefined (due to hoisting)
						var x = 5;

						console.log(y); // ReferenceError: Cannot access 'y' before initialization
						let y = 10;`}
				</pre>

				<h1>Functions & Scope</h1>
				<p>
					Common questions include closures (inner functions accessing outer
					scope) and how the this keyword works based on function context.
					Higher-order functions (taking or returning functions) and arrow
					functions (shorter syntax, this from surrounding scope) are also
					frequently asked about.{" "}
				</p>
				<br />

				<h1>Asynchronous JavaScript & The Event Loop</h1>
				<p>
					Interviewers often ask about the event loop, which manages
					asynchronous operations with a call stack and task queue. Questions
					may distinguish between callback functions (passed for later
					execution) and Promises (objects for eventual results, using .then(),
					.catch()). The async/await syntax, which simplifies asynchronous code
					based on Promises, is also a common topic.{" "}
				</p>

				<br />

				<h1>Object-Oriented Programming & Data Structures</h1>
				<p>
					Key concepts include prototypal inheritance, where objects inherit
					properties from prototypes. Familiarity with array methods like map(),
					filter(), and reduce() for array manipulation is expected. The
					difference between a shallow copy (duplicates top level, shares nested
					references) and a deep copy (completely independent copy) is another
					common question.
				</p>

				<h1>Coding Challenges</h1>
				<p>
					Many interviews include coding challenges to test problem-solving
					skills. Common problems include reversing a string, finding the
					largest number in an array, and implementing algorithms like sorting
					or searching.
				</p>
				<br />

				<h1>Best Practices & Performance</h1>
				<p>
					Interviewers may ask about best practices such as avoiding global
					variables, using strict mode, and optimizing performance by minimizing
					DOM manipulation and using efficient algorithms.
				</p>
				<br />

				<h1>Testing & Debugging</h1>
				<p>
					Knowledge of testing frameworks like Jest for unit testing and tools
					for debugging JavaScript code is often assessed in interviews.
				</p>
				<br />
				<h1>ES6+ Features</h1>
				<p>
					Familiarity with modern JavaScript features such as let/const, arrow
					functions, template literals, destructuring, and modules is commonly
					expected in interviews.
				</p>
				<br />
				<h1>Browser APIs & Security</h1>
				<p>
					Understanding of browser APIs like fetch for making HTTP requests and
					CORS for cross-origin resource sharing is important. Knowledge of
					common security vulnerabilities like XSS and CSRF is also valuable.
				</p>
				<br />
				<h1>Frameworks & Libraries</h1>
				<p>
					While not always required, familiarity with popular JavaScript
					frameworks and libraries like React, Angular, or Vue can be a plus in
					interviews.
				</p>
				<br />
				<h1>Soft Skills & Communication</h1>
				<p>
					In addition to technical knowledge, interviewers often assess soft
					skills such as problem-solving approach, communication clarity, and
					collaboration ability during coding challenges and discussions.
				</p>
				<br />
				<h1>Conclusion</h1>
				<p>
					Preparing for JavaScript interviews involves understanding a wide
					range of topics from language fundamentals to best practices.
					Reviewing common questions and practicing coding challenges can help
					build confidence and improve performance in interviews.
				</p>
				<br />

				<a href="https://protechstack.com/interview/javascript-interview-questions/">
					For more questions, check out this resource. Containing JavaScript
					Interview Questions and Answers, it&#39;s a great way to prepare for
					your next interview!
				</a>
				<br />
				<br />
			</div>
		</div>
	);
};

export default page;
