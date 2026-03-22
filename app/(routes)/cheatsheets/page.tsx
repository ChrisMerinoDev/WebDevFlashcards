import React from "react";
import Image from "next/image";
import Link from "next/link";

const CheatsheetsPage = () => {
	return (
		<div className="container-narrow section-pad">
			<h1 className="text-center">CheatsheetsPage</h1>

			<div>
				<h4 className="font-bold text-center text-2xl">
					Your go-to resource for coding cheatsheets.
				</h4>

				<p className="font-semibold text-center text-xl">
					<br /> Here, you can find concise and comprehensive cheatsheets
					covering various coding topics. Whether you&apos;re looking for quick
					syntax references, algorithm summaries, or best practices, our
					cheatsheets are designed to provide you with the essential information
					you need at a glance. Explore our collection to enhance your coding
					skills and boost your productivity!
				</p>
				<br />
				<h2 className="text-center">Explore Our Coding Cheatsheets</h2>
			</div>

			<section className="stack-lg p-6 mt-20">
				<h3 className="text-center">JavaScript Cheatsheet</h3>

				<Link href="/cheatsheets/javascript " className="w-fit mx-auto">
					<Image
						src="/javascript.jpg"
						alt="JavaScript Cheatsheet"
						width={800}
						height={400}
						className="mx-auto rounded-md shadow-md w-full object-cover"
					/>
				</Link>
				<p className="text-center">
					A comprehensive JavaScript cheatsheet covering syntax, functions, and
					common patterns.
				</p>
			</section>
		</div>
	);
};

export default CheatsheetsPage;
