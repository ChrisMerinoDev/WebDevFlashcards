import React from "react";

const page = () => {
	return (
		<main>
			<h1>Patterns Page</h1>

			<article>
				<div>
					<h2>Two Pointer Pattern</h2>
					<p>
						The Two Pointer Pattern involves using two pointers to iterate
						through a data structure, often an array or string. This technique
						is particularly useful for problems involving searching, sorting, or
						partitioning data.
					</p>
					<pre>
						{`function twoPointerExample(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        // Perform some operation with arr[left] and arr[right]
        left++;
        right--;
    }
}`}
					</pre>

					<div>
						<h2>Sliding Window Pattern</h2>
						<p>
							The Sliding Window Pattern is used to create a window that can
							either be fixed or dynamic in size, which moves over the data
							structure to solve problems related to subarrays or substrings.
							This pattern is particularly effective for optimizing time
							complexity in problems involving sums, averages, or
							longest/shortest sequences.
						</p>
						<pre>
							{`function slidingWindowExample(arr, k) {
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    let maxSum = windowSum;
    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}`}
						</pre>

						<div>
							<h2>Fast and Slow Pointer Pattern</h2>
							<p>
								The Fast and Slow Pointer Pattern involves using two pointers
								that move at different speeds through a data structure. This
								technique is commonly used to detect cycles in linked lists or
								to find the middle element of a list.
							</p>
							<pre>
								{`function hasCycle(head) {
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true; // Cycle detected
        }
    }
    return false; // No cycle
}`}
							</pre>

							<div>
								<h2>Divide and Conquer Pattern</h2>
								<p>
									The Divide and Conquer Pattern involves breaking a problem
									down into smaller subproblems, solving each subproblem
									independently, and then combining the results to solve the
									original problem. This pattern is often used in sorting
									algorithms like Merge Sort and Quick Sort, as well as in
									searching algorithms like Binary Search.
								</p>
								<pre>
									{`function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        }   else {                                  
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}`}
								</pre>

								<div>
									<h2>Backtracking Pattern</h2>
									<p>
										The Backtracking Pattern is a recursive algorithmic
										technique used for solving constraint satisfaction problems.
										It involves building a solution incrementally and abandoning
										solutions that fail to satisfy the problem&apos;s
										constraints.
									</p>
									<pre>
										{`function backtrack(solution, options) {
    if (isComplete(solution)) {
        processSolution(solution);
        return;
    }
    for (let option of options) {
        if (isValid(option, solution)) {
            solution.add(option);
            backtrack(solution, options);
            solution.remove(option); // backtrack
        }
    }
}`}
									</pre>

									<div>
										<h2>Greedy Pattern</h2>
										<p>
											The Greedy Pattern involves making a series of choices,
											each of which looks best at the moment. This approach is
											used to find an optimal solution for problems like coin
											change, activity selection, and Huffman coding.
										</p>
										<pre>
											{`function greedyExample(items, capacity) {
    items.sort((a, b) => b.value / b.weight - a.value / a.weight);
    let totalValue = 0;
    for (let item of items) {
        if (capacity >= item.weight) {
            capacity -= item.weight;
            totalValue += item.value;
        } else {
            totalValue += item.value * (capacity / item.weight);
            break;
        }
    }
    return totalValue;
}`}
										</pre>

										<div>
											<h2>Dynamic Programming Pattern</h2>
											<p>
												The Dynamic Programming Pattern is used to solve
												problems by breaking them down into simpler subproblems
												and storing the results of these subproblems to avoid
												redundant computations. This pattern is particularly
												useful for optimization problems like the Knapsack
												problem, Fibonacci sequence, and longest common
												subsequence.
											</p>
											<pre>
												{`function fibonacci(n) {
    const memo = {};
    function fib(n) {
        if (n <= 1) return n;
        if (memo[n]) return memo[n];
        memo[n] = fib(n - 1) + fib(n - 2);
        return memo[n];
    }
    return fib(n);
}`}
											</pre>

											<div>
												<h2>Topological Sort Pattern</h2>
												<p>
													The Topological Sort Pattern is used to order the
													vertices of a directed acyclic graph (DAG) in a linear
													sequence such that for every directed edge (u, v),
													vertex u comes before vertex v in the ordering. This
													pattern is commonly used in scheduling tasks,
													resolving dependencies, and organizing data.
												</p>
												<pre>
													{`function topologicalSort(graph) {
    const visited = new Set();
    const stack = [];
    
    function dfs(node) {
        visited.add(node);
        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                dfs(neighbor);
            }
        }
        stack.push(node);
    }
    
    for (let node in graph) {
        if (!visited.has(node)) {
            dfs(node);
        }
    }
    
    return stack.reverse();
}`}
												</pre>

												<div>
													<h2>Union-Find Pattern</h2>
													<p>
														The Union-Find Pattern, also known as Disjoint Set
														Union (DSU), is a data structure that keeps track of
														a set of elements partitioned into disjoint subsets.
														It supports two primary operations: finding the
														representative of a set (find) and merging two sets
														(union). This pattern is commonly used in network
														connectivity, Kruskal&apos;s algorithm for minimum
														spanning trees, and clustering algorithms.
													</p>
													<pre>
														{`class UnionFind {
    constructor(size) {
        this.parent = Array.from({ length: size }, (_, i) => i);
        this.rank = Array(size).fill(1);
    }

    find(node) {
        if (this.parent[node] !== node) {
            this.parent[node] = this.find(this.parent[node]); // Path compression
        }
        return this.parent[node];
    }

    union(node1, node2) {
        const root1 = this.find(node1);
        const root2 = this.find(node2);

        if (root1 !== root2) {
            // Union by rank
            if (this.rank[root1] > this.rank[root2]) {
                this.parent[root2] = root1;
            } else if (this.rank[root1] < this.rank[root2]) {
                this.parent[root1] = root2;
            } else {
                this.parent[root2] = root1;
                this.rank[root1]++;
            }
        }
    }
}`}
													</pre>

													<div>
														<h2>Graph Traversal Pattern</h2>
														<p>
															The Graph Traversal Pattern involves visiting all
															the nodes in a graph in a systematic way. The two
															most common methods of graph traversal are
															Depth-First Search (DFS) and Breadth-First Search
															(BFS). These techniques are used in various
															applications such as searching, pathfinding, and
															network analysis.
														</p>
														<pre>
															{`function dfs(graph, start, visited = new Set()) {
    visited.add(start);
    for (let neighbor of graph[start]) {
        if (!visited.has(neighbor)) {
            dfs(graph, neighbor, visited);
        }
    }
    return visited;
}

function bfs(graph, start) {
    const visited = new Set();
    const queue = [start];
    visited.add(start);

    while (queue.length > 0) {
        const node = queue.shift();
        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);  
                queue.push(neighbor);
            }
        }
    }
    return visited;
}`}
														</pre>

														<div>
															<h2>Memoization Pattern</h2>
															<p>
																The Memoization Pattern is an optimization
																technique used to speed up recursive algorithms
																by storing the results of expensive function
																calls and reusing them when the same inputs
																occur again. This pattern is particularly useful
																in problems with overlapping subproblems, such
																as calculating Fibonacci numbers or solving
																combinatorial problems.
															</p>
															<pre>
																{`function memoizedFibonacci(n, memo = {}) {
    if (n <= 1) return n;
    if (memo[n]) return memo[n];
    memo[n] = memoizedFibonacci(n - 1, memo) + memoizedFibonacci(n - 2, memo);
    return memo[n];
}`}
															</pre>

															<div>
																<h2>Additional Resources</h2>
																<p>
																	For more in-depth explanations and examples of
																	these patterns, consider exploring algorithm
																	textbooks, online coding platforms, and
																	educational websites dedicated to data
																	structures and algorithms.
																</p>
															</div>

															<div>
																<h2>Practice Problems</h2>
																<p>
																	To solidify your understanding of these
																	patterns, try solving related problems on
																	platforms like LeetCode, HackerRank, or
																	CodeSignal.
																</p>
															</div>
															<div>
																<h2>Palindrome Pattern</h2>
																<p>
																	The Palindrome Pattern involves identifying
																	and working with palindromic strings or
																	numbers. A palindrome is a sequence that reads
																	the same backward as forward. Common problems
																	include checking if a string is a palindrome,
																	finding the longest palindromic substring, or
																	generating palindromes.
																</p>
																<pre>
																	{`function isPalindrome(s) {
    const cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
}`}
																</pre>

																<div>
																	<h2>Recursion Pattern</h2>
																	<p>
																		The Recursion Pattern involves solving a
																		problem by having a function call itself.
																		This technique is particularly useful for
																		problems that can be broken down into
																		smaller, similar subproblems, such as tree
																		traversals, combinatorial problems, and
																		divide-and-conquer algorithms.
																	</p>
																	<pre>
																		{`function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}`}
																	</pre>

																	<div>
																		<h2>Bit Manipulation Pattern</h2>
																		<p>
																			The Bit Manipulation Pattern involves
																			using bitwise operations to solve problems
																			related to binary representations of
																			numbers. This technique is often used for
																			optimizing space and time complexity in
																			problems such as finding unique elements,
																			counting bits, and performing arithmetic
																			operations.
																		</p>
																		<pre>
																			{`function countSetBits(n) {
    let count = 0;
    while (n) {
        count += n & 1;
        n >>= 1;
    }
    return count;
}`}
																		</pre>
																		<div>
																			<h2>Matrix Traversal Pattern</h2>
																			<p>
																				The Matrix Traversal Pattern involves
																				navigating through a 2D array or matrix
																				to solve problems such as searching for
																				elements, finding paths, or performing
																				transformations. Common traversal
																				methods include row-wise, column-wise,
																				and diagonal traversals.
																			</p>
																			<pre>
																				{`function traverseMatrix(matrix) {
    const result = [];
    const rows = matrix.length;
    const cols = matrix[0].length;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            result.push(matrix[r][c]);
        }
    }
    return result;
}`}
																			</pre>
																			<div>
																				<h2>Palindrome with Numbers Pattern</h2>
																				<p>
																					The Palindrome with Numbers Pattern
																					focuses on identifying and
																					manipulating palindromic numbers. A
																					palindromic number remains the same
																					when its digits are reversed. Common
																					problems include checking if a number
																					is a palindrome, finding the largest
																					palindromic number within a range, or
																					generating palindromic numbers.
																				</p>
																				<pre>
																					{`function isNumberPalindrome(num) {
    const str = num.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}`}
																				</pre>

																				<div>
																					<h2>
																						Palindrome with Numbers Pattern
																						without converting it to String
																					</h2>
																					<p>
																						To check if a number is a palindrome
																						without converting it to a string,
																						we can reverse the number
																						mathematically and compare it with
																						the original number.
																					</p>
																					<pre>
																						{`function isNumberPalindrome(num) {
    let original = num;
    let reversed = 0;
    while (num > 0) {
        reversed = reversed * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return original === reversed;
}`}
																					</pre>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div>
									<h2>Additional Patterns Coming Soon!</h2>
									<p>
										Stay tuned for more algorithmic patterns and their
										explanations.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</article>
		</main>
	);
};

export default page;
